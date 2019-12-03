// Vue component model external
Vue.component('country-flags-extern', {
	props: ['source'],
	template: `<div class="first-component"><img v-for="flag in source" :src="flag.flag" :alt="flag.name"></div>`
})

// Vue component model internal
Vue.component('country-flags-intern', {
	template: `<div class="last-component"><img v-for="flag in countryes" :src="flag.flag" :alt="flag.name"></div>`,
	mounted() {
		this.loadCountryesApi()
	},
	data() {
		return {
			countryes: []
		}
	},
	methods: {
		loadCountryesApi() {
			// Make a request all
			axios.get('https://restcountries.eu/rest/v2/all')
				.then(response => {
					// handle success
					this.countryes = response.data.map(country => {
						return {
							name: country.name,
							capital: country.capital,
							flag: country.flag,
							region: country.region
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

// Main instance vue
const app = new Vue({
	el: '#app',
	data: {
		countryes: []
	},
	mounted() {
		this.loadCountryesApi()
	},
	methods: {
		loadCountryesApi() {
			// Make a request all
			axios.get('https://restcountries.eu/rest/v2/all')
				.then(response => {
					// handle success
					this.countryes = response.data.map(country => {
						return {
							name: country.name,
							capital: country.capital,
							flag: country.flag,
							region: country.region
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