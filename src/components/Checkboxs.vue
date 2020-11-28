<template>
  <div class="form-group form-check" v-for="(item, index) in sintomas" :key="index">
    <input type="checkbox" class="form-check-input" :id="item" :value="item" v-model="paciente.sintomas"/>
    <label class="form-check-label" :for="item">{{item}}</label>
  </div>
</template>

<script>
export default {
props:{
    sintomas: Array,
    paciente: Object
}
};
</script>

<style>
</style>