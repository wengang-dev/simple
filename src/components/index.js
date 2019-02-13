<<<<<<< HEAD
import './index.less'

import button from './button'
import input from './input'
import radio from './radio'

const components = {
  button,
  input,
  radio
}

const install = function(Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
=======
import './index.less'

import button from './button'
import input from './input'

const components = {
  button,
  input
}

const install = function(Vue) {
  if (install.installed) return
  // components.map(component => Vue.component(component.name, component))
  Object.keys(components).forEach(key => {
    Vue.component(components[key].name, components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
>>>>>>> 47f944f15ec30873c4759cf1ceff4a72b4fd6800
