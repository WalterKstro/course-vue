// Vue component select winner
Vue.component('ganador', {
	props: ['participantes'],
	template: `#ganador`,
	data() {
		return {
			winner:'',
			people: this.participantes
		}
	},
	methods: {
		selectWinner() {
			this.winner = this.people[this.getRandomArbitrary(this.people.length)]
		},
		getRandomArbitrary(max) {
			return Math.floor((Math.random() * max))
		}
	}
})

// Main instance
const app = new Vue({
	el: '#app',
	data: {
		participantes: ['Walter', 'Francisco', 'Juan', 'Alberto', 'Carlos', 'Pedro', 'Jhon', 'Anna']
	}
})