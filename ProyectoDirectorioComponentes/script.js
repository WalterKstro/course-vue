
// Componente Card
const cards = {
	props: {
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true,
		},
		photo: {
			type: String,
			required: true
		}
	},
	template: '#card-main'
}


// Componente inputSearch
const form_search = {
	template: '#input-search',
	data() {
		return {
			employe: '',
			users: []
		}
	},
	mounted() {
		this.loadUsersApi()
	},
	methods: {
		loadUsersApi() {
			// Make a request for a user with a given ID
			axios.get('https://randomuser.me/api/?results=500')
				.then(response => {
					// handle success
					dataLoadApi = response.data.results
					this.users = dataLoadApi.map(obj => {
						return {
							name: `${obj.name.first} ${obj.name.last}`,
							email: `${obj.email}`,
							photo: `${obj.picture.thumbnail}`
						}
					})
				})
				.catch(error => {
					// handle error
					console.log(error);
				})
				.finally(() => {
					// always executed
					console.log('Load data success finished')
				})
		}
	},
	components:{
		cards
	},
	computed:{
		filterByName(){
			return this.users.filter(user=>{
				return user.name.includes(this.employe)
			})
		}
	}
}


// Instancia principal de vue
const app = new Vue({
	el: '#app',
	data: {},
	components: {
		form_search
	}
})