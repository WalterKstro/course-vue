// Componentes listado de tareas
const listado_tareas={
	props:['tarea'],
	template:'#listado-tarea'
}

// Componente contenedor
const template_container={
	props:['tareas'],
	template:'#template_container',
	components:{
		listado_tareas
	}
}

// Instancia principal de vue
const app = new Vue({
	el:'#app',
	data:{
		tareas:[
			'Finalizar seccion de componetes',
			'Iniciar con Vue CLI',
			'Terminar la documentacion de Vuex',
			'Seguir con Vue Routter'
		]
	},
	components:{
		template_container
	}
})