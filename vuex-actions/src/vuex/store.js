import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
   state:{
      contador:0
   },
   mutations:{
      aumentar(state,n){
         state.contador+=n
      },
      reducir(state,n){
         state.contador-=n
      }
   },
   /*Las acciones disparan o activan mutaciones,
   las mutaciones son las encargadas de hacer cambios
   en el estado o state*/
   actions:{
      /*El argumento context tiene el alcance del state,getters y muttaions,
      las acciones tambien se les puede enviar un argumento adicional llamado
      payload*/
      aumentarAsync({commit},n){
         setTimeout(()=>{
            commit('aumentar',n)
         },2000)
      },
      reducirAsync({commit},n){
         setTimeout(()=>{
            commit('reducir',n)
         },2000)
      }
   }
})