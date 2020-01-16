<template>
  <div id="app">
    <div class="container">
      <header class="header">
        <div class="brand"><img alt="Vue logo" src="./assets/logo.png"></div>
        <nav class="nav">
          <!-- Se agrega la propiedad exact para que la coincidencia
          sea lo mas exacto posible -->
          
          <!-- Podemos activar clases personalizadas con active-class -->
          <router-link exact to="/" active-class="active">Home</router-link>
          <router-link exact to="/about" active-class="active">About Us</router-link>
        </nav>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style>

.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img{width: 100%; }
.brand{
  flex-basis: 7%;
}
.nav{
  flex-basis: 15%;
  display: flex;
  justify-content: space-between;
}
a:hover{text-decoration: none;}

/* Clase por defecto de vue, para determinar que 
componentes esta activo */
.active{
  border-bottom: 2px solid purple;
}
</style>
