const app = new Vue({
	el:'#app',
	mounted(){
		this.loadPokemon()
	},
	data:{
		pokemons:[]
	},
	methods:{
		loadPokemon(){
			this.$http.get('https://pokeapi.co/api/v2/type/3/').then(response => {
				// success callback
				this.pokemons=response.body.pokemon
			  }, response => {
				// error callback
				console.log('Error: obtener la data')
			  });
		}
	}
})