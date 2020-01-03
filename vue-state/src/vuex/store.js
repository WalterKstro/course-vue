import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// CREAR EL ADMINISTRADOR DE ESTADOS
export const store = new Vuex.Store({
   state:{
      cantidad:0
   }
})