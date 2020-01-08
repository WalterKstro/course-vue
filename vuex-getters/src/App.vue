<template>
  <div id="app">
    <Tareas/>
  </div>
</template>

<script>
import Tareas from './components/Tareas'

export default {
  name: 'app',
  components: {
    Tareas
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
