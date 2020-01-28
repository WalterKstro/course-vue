<template>
  <div>
<h3>Equipo</h3>
    <h3>Usuario con ID: {{ id }}</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quia perspiciatis possimus. Error provident, 
      veritatis optio, atque accusamus ullam quo in, repudiandae ratione a vel numquam voluptatibus totam eligendi 
      repellendus.</p>
    <router-view></router-view>
    <router-view name="bio"></router-view>
    <router-view name="skill"></router-view>

<!-- Si utilizar Router Named -->
      <!-- <router-link :to="'/equipo/'+ id + '/bio'">Bio</router-link>
      <router-link :to="'/equipo/'+ id + '/skill'">Skills</router-link> -->

      <!-- Utilizando Router Named  Comentado por Named Views-->
      <!-- <router-link :to="{ name: 'bio'}">Bio</router-link>
      <router-link :to="{ name: 'skill'}">Skills</router-link>

      <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      id : this.$route.params.id
    }
  }
}
</script>

<style>

</style>