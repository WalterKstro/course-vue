const app = new Vue({
	el:'#app',
	data:{
		games:[
			{nameGame:'CallOfDutty',ranking:2,platform:'IOS'},
			{nameGame:'FreeFire',ranking:13,platform:'Android'},
			{nameGame:'PugMobile',ranking:5,platform:'Web'},
			{nameGame:'Forthnight',ranking:1,platform:'Windows'},
			{nameGame:'PokemonGo',ranking:17,platform:'Android'},
			{nameGame:'MarioKart',ranking:6,platform:'IOS'},
			{nameGame:'SpeedDraff',ranking:12,platform:'Android'}
		],
		rangeGame:0,
		name:''
	},
	computed:{
		filterGamesByRanking(){
			let gamesFiltered=this.games.filter(game=>{
				return game.ranking> this.rangeGame
			})
			return gamesFiltered
		},
		filterGamesByName(){
			let gamesFiltered = this.games.filter(game=>{
				return game.nameGame.includes(this.name)
			})
			return gamesFiltered
		}
	}
})