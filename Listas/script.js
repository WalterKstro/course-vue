const app = new Vue({
	el:'#app',
	data:{
		sintaxHTML : '<p><strong>Hola Mundo</strong></p>',
		dias:['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
		tareas :
		[
			{tarea:'Estudiar Vuejs',estado:true},
			{tarea:'Estudiar Angular',estado:false},
			{tarea:'Estudiar React',estado:false}
		],
		persona:{
			firstName:'Walter Francisco',
			lastName:'Cherec Castro',
			age:26,
			job:'Developer'
		}
	},
	beforeCreate(){
		console.log('Funcion beforeCreate')
	},
	created(){
		console.log('Funcion created')
	},
	beforeMount(){
		console.log('Funcion beforeMount')
	},
	mounted(){
		console.log('Funcion mounted')
	},
	beforeUpdate(){
		console.log('Funcion beforeUpdate')
	},
	updated(){
		console.log('Funcion updated')
	}
})