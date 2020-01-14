<template>
  <div>
     <ul>
        <li v-for="(producto,key) in productos" :key="key">
           {{producto.nombre}} / Q.{{producto.precio}}
           <button class="btn" @click="agregarProductoCarrito(producto)">+</button>
        </li>
     </ul>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
   methods:{
      ...mapActions('carro',['comprarProducto']),
      /*Metodo para agregar un nuevo producto*/
      agregarProductoCarrito(producto){
         this.comprarProducto(producto)
      }
   },
   computed:mapState('productos',['productos'])
}
</script>

<style>

</style>