<template>
  <div>
     <button @click="sumar">Aumentar</button>
     <button @click="reducir">Reducir</button>
     <h3>{{contador}}</h3>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
methods:{
   ...mapMutations(['aumentar','reducir']),
   sumar(){
      this.aumentar(5)
   }
},
computed:mapState(['contador'])
}
</script>

<style>

</style>