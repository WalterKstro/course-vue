<template>
  <div id="app">
    <p>Cantidad: {{this.$store.state.cantidad}}</p>
    <!-- Utilizando Vuex -->
    <Contador/>
    <!-- No utilizando Vuex -->
    <!-- <Contador :contador="cantidad"
              @aumentar="cantidad++"
              @reducir="cantidad--"/> -->
  </div>
</template>

<script>

import Contador from './components/Contador'

export default {
  name: 'app',
  components: {
    Contador
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
