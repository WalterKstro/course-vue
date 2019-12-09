// Componente autor
let autor = {
	props:['inf','edad'],
	template:'<h1>{{firstName}} tiene {{edad*2}}</h1>',
	mounted(){
		console.log(this.reverseName())
	},
	methods:{
		reverseName(){
			return this.firstName = this.firstName.split(' ').reverse().join()
		}
	},
	data(){
		return{
			firstName:this.inf
		}
	}
}

// Main instance vue
const app = new Vue({
	el:'#app',
	data:{
		firstName:'Walter Francisco'
	},
	components:{
		autor
	}
})