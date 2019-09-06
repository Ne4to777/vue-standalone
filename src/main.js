import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import SPXPlugin from './plugins/spx'

Vue.config.productionTip = false

Vue.use(SPXPlugin)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
