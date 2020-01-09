<template>
  <div>
    <button @click="aumentar">Aumentar</button>
    <button @click="reducir">Reducir</button>
    <h3>Contador: {{contador}}</h3>
  </div>
</template>

<script>
/**En las mutations tambien tenemos mapMutations*/
import {mapState} from 'vuex'

export default {
  /*Utilizando mutations sin mapMutations*/
  methods:{
    aumentar(){
      /*Sin utilizar mutations*/
      //this.$store.state.contador++

      /**Utilizando mutations para cambiar el estado*/
      this.$store.commit('aumentar',5)
    },
    reducir(){
      /**Sin utilizar mutations*/
      //this.$store.state.contador--

      /**Utilizando mutations para cambiar el estado*/
      this.$store.commit('reducir')
    }
  },
  computed:mapState(['contador'])
}
</script>

<style>

</style>