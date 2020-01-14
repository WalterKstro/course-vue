export const productos={
   namespaced:true,
   state: { 
      productos:[
         {nombre:'AUDIFONO KLIP XTREME',precio:443.43},
         {nombre:'DELL G3 3590 i7 9750H 2.6GHZ 8GB',precio:10645.50},
         {nombre:'DELL INSPIRON 5391 i7 10510U 1.8GHZ',precio:9992.50},
         {nombre:'MOCHILA DELL 460-BCJY ',precio:677},
         {nombre:'ASUS LIQUID COOLER PARA CPU',precio:1667.30},
         {nombre:'TARJ DE VIDEO ASUS DUAL GTX1650',precio:1663.75}
      ]
    },
   getters: {},
   mutations: {
      /*Mutations que agrega un nuevo producto a productos*/
      add(state,producto){
         state.productos.push(producto)
      }
   },
   actions: {
      /*Actions que dispara un commit para agregar un nuevo producto*/
      agregarProducto({commit},producto){
         commit('add',producto)
      }
   }
 }
