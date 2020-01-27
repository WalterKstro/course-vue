<template>
   <div>
      <h3>Home</h3>
      
    <router-link :to="'/equipo/' + id" exact>Equipo</router-link>

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