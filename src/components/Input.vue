<template>
  <div class="row d-flex justify-content-around">
    <div class="col-ms-4 ">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          class="form-control"
          id="nombre"
          placeholder="Nombre..."
          v-model="paciente.nombre"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="Cedula">Cedula:</label>
        <input
          type="number"
          class="form-control"
          id="Cedula"
          placeholder="Cedula..."
          v-model="paciente.cedula"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="Edad">Edad:</label>
        <input
          type="Number"
          class="form-control"
          id="Edad"
          placeholder="Edad..."
          v-model="paciente.edad"
        />
      </div>
    </div>
  </div>
  <!-- Linea 2 de Input -->
  <div class="row d-flex justify-content-around">
    <div class="col-ms-4 ">
      <div class="form-group">
        <label for="Celular">Celular:</label>
        <input
          type="Number"
          class="form-control"
          id="Celular"
          placeholder="Celular..."
          v-model="paciente.celular"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="Fecha de Nacimiento">Fecha de Nacimiento:</label>
        <input
          type="Date"
          class="form-control"
          id="Fecha de Nacimiento"
          placeholder="Fecha de Nacimiento..."
          v-model="paciente.fechaNacimiento"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="Dirrecion del Paciente">Dirrecion del Paciente:</label>
        <input
          type="Text"
          class="form-control"
          id="Dirrecion del Paciente"
          placeholder="Dirrecion..."
          v-model="paciente.direccionPaciente"
        />
      </div>
    </div>
  </div>
  <div class="row d-flex justify-content-around">
    <div class="col-ms-4 ">
      <div class="form-group">
        <label for="Correo Electronico">Correo Electronico:</label>
        <input
          type="text"
          class="form-control"
          id="Correo Electronico"
          placeholder="Correo Electronico..."
          v-model="paciente.email"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="Fecha de la Muestra">Fecha de la Muestra:</label>
        <input
          type="Date"
          class="form-control"
          id="Fecha de la Muestra"
          placeholder="Fecha de la Muestra..."
          v-model="paciente.fechaMuestra"
        />
      </div>
    </div>
    <div class="col-ms-4">
      <div class="form-group">
        <label for="Direccion de la Muestra">Direccion de la Muestra:</label>
        <input
          type="Text"
          class="form-control"
          id="Direccion de la Muestra"
          placeholder="Direccion de la Muestra..."
          v-model="paciente.direccionMuestra"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    paciente: Object,
  },
};
</script>

<style scoped>
input{
    width: 250px;
}
</style>