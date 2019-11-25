const app = new Vue({
	el: '#app',
	data: {
		mensaje: 'Hola Mundo',
		allTasks: [{
				name: 'Aprender React',
				time: 15,
				priory: false
			},
			{
				name: 'Aprender Vue',
				time: 25,
				priory: true
			},
			{
				name: 'Aprender Angular',
				time: 35,
				priory: false
			},
			{
				name: 'Aprender Java',
				time: 19,
				priory: true
			},
			{
				name: 'Aprender Python',
				time: 23,
				priory: true
			}
		]
	},
	computed: {
		reverseString() {
			return this.mensaje.split('').reverse().join('')
		},
		filterTaskByPriority() {
			let resultFilter = this.allTasks.filter(task => {
				return task.priory
			})
			return resultFilter
		},
		filterTaskOutPriority() {
			let resultFilter = this.allTasks.filter(task => {
				return task.priory === false
			})
			return resultFilter
		},
		filterTaskByDuration() {
			let result = this.allTasks.sort((a, b) => {
				return a.time - b.time
			})
			return result
		}
	}
})