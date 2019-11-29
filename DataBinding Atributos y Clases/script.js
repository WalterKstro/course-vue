const app = new Vue({
	el:'#app',
	data:{
		allTask:[
			{task:'Hacer ejercicio',status:false},
			{task:'Estudiar para el examen',status:false},
			{task:'Trabajar en el proyecto',status:false},
			{task:'Practicar vuejs',status:false},
			{task:'Practicar Java',status:false},
		],
		isError:false,
		isSuccess:false,
		password:''
	},
	methods:{
		markCompletedTask(task){
			task.status=!task.status
		},
		testStatusPassword(password){
			if(password == '123'){
				this.isSuccess=!this.isSuccess
				this.isError=false
			}else{
				this.isError=!this.isError
				this.isSuccess=false
			}
		}
	},
	computed:{
		taskCompleted(){
			let complete = this.allTask.filter(task=>task.status)
			return complete
		}
	}
})