<template>
  <div class="home">
    <form @submit.prevent="ProcesarFormulario">
      <div class="card">
        <div class="card-header text-dark">
          <h2>Datos del Paciente</h2>
        </div>
        <div class="card-body">
          <Input :paciente="paciente" />
          <hr />
          <h2>Sintomas</h2>
          <div class="row d-flex justify-content-around">
            <div class="col-ms-4">
              <Checkboxs :paciente="paciente" :sintomas="sintoma1" />
            </div>
            <div class="col-ms-4">
              <Checkboxs :paciente="paciente" :sintomas="sintoma2" />
            </div>
            <div class="col-ms-4">
              <Checkboxs :paciente="paciente" :sintomas="sintoma3" />
            </div>
          </div>
          <button class="btn btn-block bg-info text-white">Procesar</button>
        </div>
      </div>
    </form>

  </div>
</template>

<script>
// @ is an alias to /src
import Input from "../components/Input";
import Checkboxs from "../components/Checkboxs";
import {mapActions} from 'vuex'

export default {
  name: "Home",
  components: {
    Input,
    Checkboxs,
  },
  data() {
    return {
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
      },
      sintoma1: [
        "Fiebre > 38°",
        "Fatiga",
        "Disnea",
        "Tos",
        "Dolor Muscular",
        "Dolor Toráxico",
        "Anosmia (falta de olfato)",
      ],
      sintoma2: [
        "Rinitis",
        "Ojo Rojo",
        "Pérdida del Sabor",
        "Perdida del Apetito",
        "Dolor de Cabeza",
        "Producción de Esputo",
        "Dolor de Garganta",
      ],
      sintoma3: [
        "Diarrea",
        "Náuses/Vómito",
        "Delirium",
        "Vértigo",
        "Edema Unilateral de Miembros Inferiores",
        "Taquipnea (Frecuencia respiratoria > 24 RPM",
        "Resequedad de los ojos y/o Lengua",
      ],
    };
  },
  methods:{
    ...mapActions(['addPaciente']),

    ProcesarFormulario(){

      this.addPaciente(this.paciente)

      this.paciente = {
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
      }
    }
  }
};
</script>
