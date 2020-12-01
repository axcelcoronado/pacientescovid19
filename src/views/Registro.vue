<template>
  <div class="card">
    <div class="card-body">
      <form @click.prevent="getSingInUser({email: email, password: pass1})">
        <div class="form-group">
          <label for="email">Correo Electronico:</label>
          <input
            type="Text"
            class="form-control"
            id="email"
            placeholder="Correo Electronico..."
            v-model="email"
          />
          <div class="form-group my-3">
            <label for="passwd1">Contraseña:</label>
            <input
              type="password"
              class="form-control"
              id="passwd1"
              placeholder="Contraseña..."
              v-model="pass1"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="passwd2">Repetir la Contraseña:</label>
          <input
            type="Text"
            class="form-control"
            id="passwd2"
            placeholder="Repetir la contraseña..."
            v-model='pass2'
          />
        </div>
        <button class="btn btn-block bg-info text-white">Registrar usuario</button>
      </form>
      <p>{{email}} - {{pass1}}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      email: '',
      pass1: '',
      pass2:'',
    }
  },
  methods:{
    ...mapActions(['getSingInUser'])
  }
};
</script>

<style>
</style>