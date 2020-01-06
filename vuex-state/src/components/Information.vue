<template>
  <div>
    <!-- <ul>
      <li v-for="(value,key) in getInformation" :key="key">
        {{key.toUpperCase()}} : {{ value }}
      </li>
    </ul> -->
    <p><strong>Nombre: </strong>{{ firstName }}</p>
    <p><strong>Apellido: </strong>{{ lastName }}</p>
    <p><strong>Trabajo: </strong>{{ job }}</p>
    <p><strong>Pais: </strong>{{ country }}</p>
  </div>
</template>

<script>
// Importamos mapState de Vuex
import { mapState  } from 'vuex'

  export default {
    // Utilizando uan computed comun
    
    // computed:{
    //   getInformation(){
    //     return {
    //       firstName:this.$store.state.firstName,
    //       lastName:this.$store.state.lastName,
    //       job:this.$store.state.job,
    //       country:this.$store.state.country
    //     }
    //   }
    // }


    // Utilizando el mapState pasandole un objeto como parametro

    // computed:mapState({
    //   firstName:state=>state.firstName,
    //   lastName:state=>state.lastName,
    //   job:state=>state.job,
    //   country:state=>state.country
    // })


    // Utilizando el mapState pasandole un array como parametro
    computed:mapState(['firstName','lastName','job','country'])
  }
</script>

<style lang="css" scoped>
ul{
  list-style-type: none;
}
</style>