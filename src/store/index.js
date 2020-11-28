import { createLogger, createStore } from 'vuex'
import {db} from '../firebase'

export default createStore({
  state: {
    pacientes:[]
  },
  mutations: {
    setPaciente(state, payload){
      state.pacientes = payload
    }
  },
  actions: {
    addPaciente({commit}, paciente){
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
      }).then(doc =>{
        console.log(doc.id)
      })
    },

    getPaciente({commit}){
      const pacientes = []
      db.collection('pacientes').get()
      .then(res =>{
        res.forEach(doc => {
          console.log(doc.id)
          console.log(doc.data())
          let paciente = doc.data()
          paciente.id = doc.id
          pacientes.push(paciente)
        })
        commit('setPaciente', pacientes)
      })
    }
  },
  modules: {
  }
})
