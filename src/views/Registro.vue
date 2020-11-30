<template>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="form-group">
          <label for="email">Correo Electronico:</label>
          <input
            type="Text"
            class="form-control"
            id="email"
            placeholder="Correo Electronico..."
          />
          <div class="form-group my-3">
            <label for="passwd1">Contraseña:</label>
            <input
              type="password"
              class="form-control"
              id="passwd1"
              placeholder="Contraseña..."
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
          />
        </div>
        <button class="btn btn-block bg-info text-white">Registrar usuario</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>