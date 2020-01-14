export const carro={
   namespaced:true,
   state:{
      carrito:[]
   },
   getters:{
      /*getters que obtiene el total de la compra*/
      getTotalCompra(state){
         if (state.carrito.length>0) {
            return state.carrito.reduce((suma,producto)=>suma + producto.precio,0)
         }else{
            return 0
         }
      }
   },
   mutations:{
      /*Mutations que agrega un nuevo producto a carrito*/
      buy(state,producto){
         state.carrito.push(producto)
      },
      /*Mutations que remueve un producto del carrito*/
      remove(state,index){
         state.carrito.splice(index,1)
      }
   },
   actions:{
         /*Actions que dispara un commit para agregar un nuevo producto al carrito*/
         comprarProducto({commit},producto){
            commit('buy',producto)
         },
         /*Action que dispara un commit para remover productos del carrito*/
         eliminarProducto({commit},index){
            commit('remove',index)
         }
   }
}