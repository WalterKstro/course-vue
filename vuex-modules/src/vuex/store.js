import Vue from 'vue'
import Vuex from 'vuex'
import {productos} from './modules/productos'
import {carro} from './modules/carro'

Vue.use(Vuex)

export const store = new Vuex.Store({
   /*Objeto modules que contiene los diferentes
   modules en que se ha dividio el archivo store*/   
   modules:{
      productos,
      carro
   }
})