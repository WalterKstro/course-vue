<template>
  <div>
    <h3>Tareas Completadas</h3>
    <ul>
      <!-- <li v-for="(tarea,key) in tasks" :key="key">{{tarea.tarea}}</li> -->
      <li v-for="(tarea,key) in filteredByCompleted" :key="key">{{tarea.tarea}}</li>
    </ul>
  </div>
</template>

<script>
  /*Importando los mapGetters  de vuex*/
import {mapGetters } from 'vuex'

export default {
data(){
    return{
      /*Sin utilizar los getters*/
      // tasks: this.$store.state.tareas

      /*Utilizando los getters*/
      // tasks:this.$store.getters.filteredByCompleted
    }
  }

  /*Sin utilizar los getters*/
  // computed:{
  //   taskCompleted(){
  //     return this.tasks.filter(task => task.estado)
  //   }
  // }  
  ,
  
  /*Utilizando los filteredByCompleted pasando como parametro
    un arreglo de los mapGetters*/
  computed:mapGetters(['filteredByCompleted'])

}
</script>

<style>

</style>