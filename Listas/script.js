const app = new Vue({
	el:'#app',
	data:{
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
	}
})