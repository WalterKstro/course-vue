<template>
  <div id="app">
    <div class="container">
      <header class="header">
        <div class="brand"><img alt="Vue logo" src="./assets/logo.png"></div>
        <nav class="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About Us</router-link>
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
  flex-basis: 7Vue%;
}
.nav{
  flex-basis: 15%;
  display: flex;
  justify-content: space-between;
}
</style>
