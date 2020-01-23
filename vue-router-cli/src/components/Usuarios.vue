<template>
   <div>
      <!-- La propiedad $route muestra informacion
      de la ruta -->
      <h1>El ID usuario: {{ id }}</h1>
   </div>
</template>

<script>
   export default {
      data(){
         return{
            id : this.$route.params.id
         }
      },
      // Watch nos permite reaccionar a los cambios de parametros
      // Entre componentes que hacen uso de segmentos dinamicos
      watch: {
         '$route'(to){
            this.id = to.params.id
         }
      }
   }
</script>

<style lang="scss" scoped>

</style>