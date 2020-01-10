<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h3>Sin utilizat mapActions</h3>
    <Contador/>
    <h3>Utilizando mapActions</h3>
    <MapActions/>
  </div>
</template>

<script>
import Contador from './components/Contador.vue'
import MapActions from './components/ContadorMapActions'

export default {
  name: 'app',
  components: {
    Contador,
    MapActions
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
