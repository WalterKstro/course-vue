import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store=new Vuex.Store({
   state:{
      contador:0
   },
   /*Utilizando los mutations de vuex, que reciben como primer
   parametro el estado*/
   mutations:{
      /**En las mutaciones podemos pasar un argumento adicional 
       * llamado payload lo mas comun es que sea un objeto
       */
      aumentar(state,n){
         state.contador+=n
      },
      reducir(state){
         state.contador--
      }
   }
})