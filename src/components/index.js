import './index.less'

import button from './button'
import input from './input'
import radio from './radio'
import checkbox from './checkbox'

const components = {
  button,
  input,
  radio,
  checkbox
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
