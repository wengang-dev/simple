import Vue from 'vue'
import App from './App'
import router from './router'
import simple from './components/index'

Vue.config.productionTip = false
Vue.use(simple)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
