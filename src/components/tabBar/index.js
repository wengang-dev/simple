import simTabBar from './tabBar.vue'
simTabBar.install = function(Vue) {
  Vue.component(simTabBar.name, simTabBar)
}
export default simTabBar
