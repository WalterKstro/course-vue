<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <Productos/>
        </div>
        <div class="col-6">
          <Carro/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Productos from './components/Productos'
import Carro from './components/Carrito'

export default {
  name: 'app',
  components: {Productos,Carro}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
