import About from '../components/About'
import Home from '../components/Home'
import Usuarios from '../components/Usuarios'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
   {path:'/',component:Home},
   {path:'/about',component:About},   
   // El id crea un segmento dinamico que es reemplazado por un 
   // parametro enviado en a URL
   {path:'/usuario/:id',component:Usuarios}   
]
export const router=new VueRouter({
   routes
})


