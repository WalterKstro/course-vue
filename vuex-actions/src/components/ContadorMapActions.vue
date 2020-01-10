<template>
  <div>
    <button @click="add">Aumentar</button>
    <button @click="remove">Reducir</button>
    <h3>{{contador}}</h3>
  </div>
</template>

<script>

import {mapState,mapActions} from 'vuex'
export default {
  computed:mapState(['contador']),
  methods:{
     ...mapActions({aumentar:'aumentarAsync',reducir:'reducirAsync'}),
     add(){
        this.aumentar(10)
     },
     remove(){
        this.reducir(5)
     }
  }
}
</script>

<style>

</style>