import Vue from 'vue'
import VueRouter from 'vue-router'
import Bio from '../components/UsuarioBio'
import Usuario from '../components/Usuario'
import Inicio from '../components/Home'
import Skills from '../components/UsuarioSkills'
import Equipo from '../components/Equipo'
import Contacto from '../components/Contacto'
import Error from '../components/Error404'


Vue.use(VueRouter)

const routes = [
   { path: '/', component: Inicio },
   { path: '/about', alias:'/inicio', redirect:'/', component: Inicio },
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
   },
   // Envio de props desde router vue, sin la nececidad de crear segmetnos dinamicos en el 
   // path del router
   { path: '/contacto', name : 'contacto', component: Contacto, props: { estado : true } },
   // Modo history - page not found error 404 
   { path: '*', name : 'error', component: Error }
 ]


 export const router = new VueRouter({
   mode: 'history',
   routes // short for `routes: routes`
 })

