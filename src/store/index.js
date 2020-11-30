import router from '../router'
import { createLogger, createStore } from 'vuex'
import { db } from '../firebase'

export default createStore({
  state: {
    pacientes: [],
    paciente: {
      nombre: "",
      edad: "",
      cedula: "",
      celular: "",
      direccionPaciente: "",
      fechaNacimiento: "",
      direccionMuestra: "",
      fechaMuestra: "",
      email: "",
      sintomas: [],
      id: ''
    },
  },
  mutations: {
    setPaciente(state, payload) {
      state.pacientes = payload
    },
    setEditPaciente(state, payload) {
      state.paciente = payload
    },
    setDeletePaciente(state, payload){
      state.pacientes = state.pacientes.filter(item => item.id !== payload)
    }
  },
  actions: {
    addPaciente({ commit }, paciente) {
      db.collection('pacientes').add({
        nombre: paciente.nombre,
        edad: paciente.edad,
        cedula: paciente.cedula,
        celular: paciente.celular,
        direccionPaciente: paciente.direccionPaciente,
        fechaNacimiento: paciente.fechaNacimiento,
        direccionMuestra: paciente.direccionMuestra,
        fechaMuestra: paciente.fechaMuestra,
        email: paciente.email,
        sintomas: paciente.sintomas,
      }).then(doc => {
        console.log(doc.id)
      })
    },

    getPaciente({ commit }) {
      const pacientes = []
      db.collection('pacientes').get()
        .then(res => {
          res.forEach(doc => {
            // console.log(doc.id)
            // console.log(doc.data())
            let paciente = doc.data()
            paciente.id = doc.id
            
            pacientes.push(paciente)
          })
          commit('setPaciente', pacientes)
        })
    },

    getEditPaciente({ commit }, idPaciente) {
     db.collection('pacientes').doc(idPaciente).get()
      .then(res => {
        if (res.exists) {
          console.log('id del paciente para editar', res.id);
          console.log(res.data());
          let paciente = res.data()
          paciente.id = res.id
          commit('setEditPaciente',paciente)
        }else{
          console.log('Documento no encontrado');
        }
      })
    },

    updatePaciente({ commit }, paciente) {
      db.collection('pacientes').doc(paciente.id).update({
        nombre: paciente.nombre,
        edad: paciente.edad,
        cedula: paciente.cedula,
        celular: paciente.celular,
        direccionPaciente: paciente.direccionPaciente,
        fechaNacimiento: paciente.fechaNacimiento,
        direccionMuestra: paciente.direccionMuestra,
        fechaMuestra: paciente.fechaMuestra,
        email: paciente.email,
        sintomas: paciente.sintomas,
      }).then(doc => {
        console.log('paciente editado')
        router.push('/')
      })
    },

    deletPaciente({commit, dispatch}, idPaciente){
      db.collection('pacientes').doc(idPaciente).delete()
      .then(res=>{
        console.log('paciente eliminado')
        commit('setDeletePaciente', idPaciente)
        // dispatch('getPaciente')
      })
    }
  },
  modules: {
  }
})
