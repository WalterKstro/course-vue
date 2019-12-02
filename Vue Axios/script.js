const app = new Vue({
	el: '#app',
	data: {
		countryes: []
	},
	mounted(){
		this.loadCountryesApi()
	},
	methods: {
		loadCountryesApi() {
			// Make a request all
			axios.get('https://restcountries.eu/rest/v2/all')
				.then(response=> {
					// handle success
					this.countryes = response.data.map(country=>{
						return{
							name: country.name,
							borders:country.borders,
							capital:country.capital,
							flag:country.flag,
							region:country.region
						}
					})
					console.log(this.countryes)
				})
				.catch(function (error) {
					// handle error
					console.log(error);
				})
				.finally(function () {
					// always executed
				});
		}
	}
})