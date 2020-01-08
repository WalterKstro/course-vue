import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
   state:{
      tareas:[
         {tarea:'Aprender Vuejs',estado:false},
         {tarea:'Aprender Vuex',estado:true},
         {tarea:'Aprender VueRoutter',estado:true},
         {tarea:'Aprender Nuexjs',estado:false},
         {tarea:'Aprender TypeScript',estado:true},
         {tarea:'Aprender VueCLI',estado:true},
      ]
   },
   /*
   Los getters son como propiedades computadas para el estado
   */ 
   getters:{
      filteredByCompleted(state){
         return state.tareas.filter(tarea => tarea.estado)
      }
   }
})