<template>
  <div>
    <p>Cantidad Productos: <strong>{{ carrito.length }}</strong></p>
    <p>Total Compra: <strong>Q{{getTotalCompra.toFixed(2)}}</strong></p>
    <ul>
      <li v-for="(producto,key) in carrito" :key="key">
        {{producto.nombre}}
        <button class="btn" @click="removerProducto(key)">X</button>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'

  export default {
    computed:{
      ...mapState('carro',['carrito']),
      ...mapGetters('carro',['getTotalCompra'])
    },
    methods:{
      ...mapActions('carro',['eliminarProducto']),
      /*Metodo que remueve un producto de carrito*/
      removerProducto(index){
        this.eliminarProducto(index)
      }
    }
  }
</script>

<style lang="css" scoped>

</style>