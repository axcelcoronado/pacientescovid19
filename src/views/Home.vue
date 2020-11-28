<template>
  <div class="home">
    <form>
      <div class="card">
        <div class="card-header text-dark">
          <h2>Datos del Paciente</h2>
        </div>
        <div class="card-body">
          <Input :paciente="paciente" />
          <hr>
          <h2>Sintomas</h2>
        </div>
      </div>
    </form>
    <p>{{ paciente }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import Input from "../components/Input";

export default {
  name: "Home",
  components: {
    Input,
  },
  data() {
    return {
      paciente: {
        nombre: "",
        edad: '',
        cedula: '',
        celular: '',
        direccionPaciente: '',
        fechaNacimiento: '',
        direccionMuestra: '',
        fechaMuestra: '',
        email:'',
        sintomas:[]
      },
    };
  },
  
};
</script>
