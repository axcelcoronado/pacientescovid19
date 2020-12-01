<template>
  <div v-for="(item, index) in pacientes" :key="index">
    <div class="card my-3">
      <div class="card-header">
        <h2>{{ item.nombre }}</h2>
      </div>
      <div class="card-body">
        <div class="row d-flex justify-content-around">
          <div class="col-ms-4">
            <h5>Edad: {{ item.edad }}</h5>
          </div>
          <div class="col-ms-4">
            <h5>Cedula: {{ item.cedula }}</h5>
          </div>
          <div class="col-ms-4">
            <h5>Celular: {{ item.celular }}</h5>
          </div>
        </div>
        <div class="row d-flex justify-content-around">
          <div class="col-ms-6">
            <h5>Fecha de Muestra: <span class="text-info">{{ item.fechaMuestra }}</span></h5>
          </div>
          <div class="col-ms-6">
            <h5>Direccion de la Muestra: <span class="text-info">{{ item.direccionMuestra }}</span></h5>
          </div>
        </div>
        <div class="row d-flex justify-content-around">
          <div class="col-ms-4">
            <h5>Dirrecion del Paciente: {{ item.direccionPaciente }}</h5>
          </div>
          <div class="col-ms-4">
            <h5>Fecha de Nacimiento: {{ item.fechaNacimiento }}</h5>
          </div>
          <div class="col-ms-4">
            <h5>Correo Electronico: {{ item.email }}</h5>
          </div>
        </div>
        <hr>
        <div>
          <ul v-for="(doc, index) in item.sintomas" :key="index">
            <li>{{doc}}</li>
          </ul>
        </div>
      </div>
      <div class="card-footer d-flex justify-content-center">
        <button class="btn btn-danger mx-2" @click="deletPaciente(item.id)">Eliminar</button>
        <router-link :to="{name:'Editar', params:{id:item.id}}">
        <button class="btn btn-warning mx-2">Editar</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  created() {
    this.getPaciente();
  },
  methods: {
    ...mapActions(["getPaciente",'deletPaciente']),
  },
  computed: {
    ...mapState(["pacientes"]),
  },
};
</script>


<style scoped>
.card-body{
  overflow: auto!important;
  max-height: 250px;
}
</style>