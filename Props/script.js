// Componente autor
let autor = {
	// props:['inf','edad'],

	// Validation properties of type
	// Props required and with default value
	props:{
		nombre:String,
		// Prop required
		edad:{
			type:Number,
			required:true
		},
		notas:Array,
		puesto:{
			type:String,
			default:'Undefined propertie'
		}

	},
	template:'#template-properties',
	data(){
		return{
			firstName:this.nombre,
			age:this.edad,
			notes:this.notas,
			job:this.puesto
		}
	}
}

// Main instance vue
const app = new Vue({
	el:'#app',
	data:{
		name:'Walter Francisco',
		age:26,
		notes:[26,56,89,45],
		job:'Front End Developer'
	},
	components:{
		autor
	}
})