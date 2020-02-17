// Declaration a custom directive global
Vue.directive('transform',{
	// Recive fourth params(el,binding(es un objeto),vnode,oldVnode)
	bind(el,binding,vnode){
		if (binding.value == 'uppercase') {
			el.style.textTransform = `${binding.value}`
		}else{
			el.style.textTransform = `${binding.value}`
		}
	}
})

Vue.directive('position', {
	bind(el,binding,vnode) {
		el.style.position = `${binding.value}`
		el.style.top = 0
		let change = Object.keys(binding.modifiers)[0]
		if (binding.arg) {
			let color = 'tomato'
			if (change != '') {
				color = change
			}
			el.style.background = color
		}
		console.log(change)
	}
})

const app = new Vue({
	el:'#app',
	data:{
	}
})