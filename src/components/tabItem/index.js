import simTabItem from './tabItem.vue'
simTabItem.install = function(Vue) {
  Vue.component(simTabItem.name, simTabItem)
}
export default simTabItem
