import Vue from 'vue'
import VueRouter from 'vue-router'
import Bio from '../components/UsuarioBio'
import Usuario from '../components/Usuario'
import Inicio from '../components/Home'
import Skills from '../components/UsuarioSkills'
import Equipo from '../components/Equipo'


Vue.use(VueRouter)

const routes = [
   { path: '/', component: Inicio },
   { path: '/equipo/:id', component: Equipo,
      children : [
         { path:'', component: Usuario, 
            children : [
               {path: 'bio', component: Bio},
               {path: 'skill', component: Skills}
            ]
         }
      ]
   }
 ]


 export const router = new VueRouter({
   routes // short for `routes: routes`
 })

