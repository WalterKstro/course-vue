import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
   state:{
      firstName:'Walter Francisco',
      lastName:'Cherec Castro',
      job:'Developer',
      country:'Guatemala'
   }
})