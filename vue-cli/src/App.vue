<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Persona/>
  </div>
</template>

<script>
import Persona from './components/Persona'
export default {
  
  name: 'app',
  components: {
    Persona
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
