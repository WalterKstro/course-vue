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

const app = new Vue({
	el:'#app',
	data:{
	}
})