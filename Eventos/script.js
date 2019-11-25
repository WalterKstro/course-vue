const app = new Vue({
	el:'#app',
	data:{
		homeworks:
		[
			'Estudiar Java',
			'Estudiar Vue'
		],
		task:''
	},
	methods:{
		addTaskOnList(){
			this.homeworks.push(this.task)
			this.task =''
		}
	}
})