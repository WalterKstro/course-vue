<template>
   <div>
      <h3>Home</h3>
      <!-- Sin utilizar Router Named -->
    <!-- <router-link :to="'/equipo/' + id" exact>Equipo</router-link> -->
    <!-- Utilizando Router Named -->
    <router-link :to="{ name: 'equipo', params : { id } }" exact>Equipo</router-link>

   </div>
</template>

<script>
   export default {
      data() {
         return {
            id: 'walter'
         }
      }
   }
</script>

<style lang="scss" scoped>

</style>