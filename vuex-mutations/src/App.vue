<template>
  <div id="app">
    <h2>Sin utilizar mapMutations</h2>
    <!-- Componente que utiliza los mapMutations -->
    <Contador/>
    <h2>Utilizando mapMutations</h2>
    <!-- Componente que no utiliza los mapMutations -->
    <ContadorMapMutations/>
  </div>
</template>

<script>
import Contador from './components/Contador.vue'
import ContadorMapMutations from './components/ContadorMapMutations'

export default {
  name: 'app',
  components: {
    Contador,
    ContadorMapMutations
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: purple;
  margin-top: 60px;
}
</style>
