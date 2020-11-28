<template>
  <div class="navbar bg-info">
    <h1>
    <router-link to="/" class="text-white">Covid-19</router-link> 
    </h1>
    <router-link to="/pacientes" class="btn btn-info">Listado</router-link>
  </div>
  <div class="container my-3">
  <router-view/>
  </div>
</template>
