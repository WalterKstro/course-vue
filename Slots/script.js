// Componente scoped slot
let tareas = {
	props:['tareas'],
	template:'#homeworks'
}

// Componente alert
let alerta={
	props:['color','title','error','position'],
	template:'#alerta-show',
	methods:{
		cerrarAlerta(){
			// Desde el componente emite un evento llamado toogle-show
			this.$emit('toogle-show')
		}
	}
}

const app = new Vue({
	el:'#app',
	data:{
		tasks:[
			{title:'Estudiar Vuejs'},
			{title:'Aprender Java'},
			{title:'Estudiar ingles'},
			{title:'Dormir temprano'},
			{title:'Llevar computadora'}
		],
		mostrarDanger:false,
		mostrarSuccess:false,
		mostrarInfo:false,
		mostrarWarning:false
	},
	components:{
		alerta,
		tareas
	}
})