/*Creacion de los componentes 
que seran mostardos*/
const home={
	template:'<h1>Bienvenido a mi Pagina</h1>'
}
const about={
	template:'<h1>Mi historia</h1>'
}

/*Declaracion de las diferentes rutas*/
const routes = [
	{ path: '/', component: home },
	{ path: '/about', component: about }
 ]

 /*Instancia de VueRouter*/
 const router = new VueRouter({
	routes
 })


// Instancia principal de vue
// Agregando la propiedad router a la instancia
// principal de vue
const app = new Vue({
	router,
	el:'#app'
})