<template>
   <div>
      <form @submit.prevent="agregarAListado">
         <div class="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input type="text" class="form-control" id="exampleInputEmail1" v-model="nombre"/>
         </div>
         <div class="form-group">
            <label for="exampleInputPassword1">Precio</label>
            <input type="text" class="form-control" id="exampleInputPassword1" v-model="precio"/>
         </div>
         <input type="submit" class="btn btn-success" value="Añadir Producto">
      </form>
      <hr>
      <Listado/>
   </div>
</template>

<script>
import Listado from './Listado'
import {mapActions} from 'vuex'

export default {
   data(){
      return{
         nombre:'',
         precio:''
      }
   },
   components:{Listado},
   methods:{
      /*Mapeando los actions con mapActions*/
      ...mapActions('productos',['agregarProducto']),
      /*Metodo que invoca un actions, pasandole un objeto*/
      agregarAListado(){
         let producto = {nombre:this.nombre,precio:Number(this.precio)}
         if ((this.nombre!='') && (this.precio!='')) {
            /*Se llama al actions pasandole el objeto producto*/
            this.agregarProducto(producto)
         }
         this.nombre=''
         this.precio=''
      }
   }
};
</script>

<style lang="css" scoped>
</style>