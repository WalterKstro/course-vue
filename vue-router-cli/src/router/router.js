import About from '../components/About'
import Home from '../components/Home'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[
   {path:'/',component:Home},
   {path:'/about',component:About}   
]
export const router=new VueRouter({
   routes
})


