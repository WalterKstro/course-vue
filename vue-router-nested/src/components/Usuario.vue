<template>
  <div>    
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
        idUser : this.$route.params.id
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>