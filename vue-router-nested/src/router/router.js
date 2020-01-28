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
   // Propiedad name para nombrar a las rutas
   { path: '/team/:id', component: Equipo,
   // Sin utilizar los View Named
      children : [
         { path:'', name: 'equipo', components: { default: Usuario, bio: Bio, skill: Skills}, 
            // children : [
            //    {path: 'bio', name:'bio', component: Bio},
            //    {path: 'skill', name:'skill', component: Skills}
            // ]
         }
      ]
   }
 ]


 export const router = new VueRouter({
   routes // short for `routes: routes`
 })

