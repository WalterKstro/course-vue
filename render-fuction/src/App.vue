<template>
  <div id="app">
    <Elemento tipo="header">Hola Mundo</Elemento>
  </div>
</template>

<script>
import Elemento from './components/Elemento'

export default {
  name: 'app',
  components: {
    Elemento
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
