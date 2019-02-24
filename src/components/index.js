import './index.less'

import button from './button'
import input from './input'
import radio from './radio'
import checkbox from './checkbox'
import checkboxGroup from './checkboxGroup'
import inputNumber from './inputNumber'
import select from './select'
import options from './options'
import cascader from './cascader'
import slider from './slider'
import simSwitch from './switch'
import simRate from './rate'

const components = {
  button,
  input,
  radio,
  checkbox,
  checkboxGroup,
  inputNumber,
  select,
  options,
  cascader,
  slider,
  simSwitch,
  simRate
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
