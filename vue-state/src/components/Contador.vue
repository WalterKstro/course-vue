<template>
  <div>
    <input type="button" value="Aumentar" @click="sumar">
    <input type="button" value="Reducir" @click="restar">
  </div>
</template>

<script>
  export default {
    methods:{
      sumar(){
        // Usando custom events
        // this.$emit('aumentar')
        this.$store.state.cantidad++
      },
      restar(){
        if (this.$store.state.cantidad < 1) {
          alert('No puede seguir restando')
        }else{
          // Usando custom events
          // this.$emit('reducir')
          this.$store.state.cantidad--
        }
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>