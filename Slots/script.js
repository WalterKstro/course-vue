// Componente alert
let alerta={
	props:['color','title','error','position'],
	template:'#alerta-show'
}

const app = new Vue({
	el:'#app',
	data:{
	
	},
	components:{
		alerta
	}
})