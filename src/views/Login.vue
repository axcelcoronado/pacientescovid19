<template>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="Email">Correo Electronico</label>
          <input
            type="Text"
            class="form-control"
            id="Email"
            placeholder="Correo Electronico..."
          />
        </div>
        <div class="form-group">
          <label for="Contraseña">Contraseña</label>
          <input
            type="password"
            class="form-control"
            id="Contraseña"
            placeholder="Contraseña..."
          />
        </div>
        <button class="btn btn-block bg-info text-white">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>