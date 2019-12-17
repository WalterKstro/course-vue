// Instancia utilitaria de vue para la comunicacion
// entre componentes
const bridgeComponent=new Vue()

// Component cesta
let cesta = {
	template:'#template-cesta',
	data(){
		return{
			total:0.00,
			productos:[]
		}
	},
	methods:{
		removerProducto(precio,index){
			if (this.productos.length>0) {
				this.total-=Number(precio.toFixed(2))
				this.productos.splice(index,1)
			}else{
				alert('El cesto de compra esta vacio')
			}
		}
	},
	mounted(){
		// Aqui se recibe el evento emitido desde el 
		// Componente productos utilizando la instancia
		// utilitaria bridgeComponent
		bridgeComponent.$on('agregar',(precio,producto)=>{
			this.total+=precio
			this.productos.push(producto)
		}),
		// Desabilitado
		bridgeComponent.$on('remover',(precio,producto,index)=>{
			if (this.productos.length>0) {
				this.total-=precio
				this.productos.splice(index,1)
			}else{
				alert('El cesto de compra esta vacio')
			}
		})
	}

}
// Component productos
let productos={
	props:{
		productos:{
			type:Array,
			required:true
		}
	},
	template:'#template-productos',
	methods:{
		agregarProducto(precio,producto){
			// Uso del bridgeComponent para emitir un evento
			bridgeComponent.$emit('agregar',precio,producto)
		},
		removerProducto(precio,producto,index){
			// Uso del bridgeComponent para emitir un evento
			bridgeComponent.$emit('remover',precio,producto,index)
		}
	}
}

// Main instance vue
const app = new Vue({
	el:'#app',
	data:{
		productos:[
			{nombre:'MINI PC INTEL NUC i3 5010U NUC5I3RYH',precio:2091.30},
			{nombre:'CELULAR SAMSUNG A20S OCTACORE 1.8GHZ ',precio:1500.99},
			{nombre:'TARJ DE VIDEO ASUS TUF GTX 1650 OC 4GB',precio:1700.50},
			{nombre:'MOCHILA THULE ENROUTE 23L NEGRO PARA 15',precio:677.30},
			{nombre:'BOCINA ULTIMATE EARS MEGABOOM3',precio:1580.50}
		]
	},
	components:{
		cesta,
		productos
	}
})