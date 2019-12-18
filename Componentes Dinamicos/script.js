// Componentes listado de tareas
const listado_tareas={
	props:['tarea'],
	template:'#listado-tarea'
}

// Componente contenedor
const template_container={	
	template:'#template_container',
	components:{
		listado_tareas
	},
	data(){
		return{
			tareas:[
				'Finalizar seccion de componetes',
				'Iniciar con Vue CLI',
				'Terminar la documentacion de Vuex',
				'Seguir con Vue Routter'
			]
		}
	}
}
// Componente contacto
const contacto={
	template:'#plantilla-contacto'
}
// Componente Blog
const blog={
	template:'#plantilla-blog'
}

// Instancia principal de vue
const app = new Vue({
	el:'#app',
	data:{
		seleccionado:'template_container',
	},
	components:{
		template_container,
		blog,
		contacto
	}
})