<template>
  <div>
    <button @click="aumentar">Aumentar</button>
    <button @click="reducir">Reducir</button>
    <h3>{{contador}}</h3>
  </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
  computed:mapState(['contador']),
  methods:{
    aumentar(){
      // Sin utilizar los actions podemos hacer cambios en el state
      // this.$store.commit('aumentar')

      // Utilizando los actions
      this.$store.dispatch('aumentarAsync',10)
    },
    reducir(){
      // Sin utilizar los actions podemos hacer cambios en el state
      // this.$store.commit('reducir')

      // Utilizando los actions
      this.$store.dispatch('reducirAsync',5)
    }
  }
}
</script>

<style>

</style>