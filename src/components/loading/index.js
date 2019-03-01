import Vue from 'vue'
Vue.directive('loading', function(el, binding) {
  let container = document.createElement('div')
  container.classList.add('sim-loading-container')
  let board = document.createElement('div')
  board.classList.add('sim-loading')
  let load = document.createElement('div')
  load.classList.add('sim-loading-point-box')
  let point_one = document.createElement('div')
  let point_two = document.createElement('div')
  let point_three = document.createElement('div')
  point_one.classList.add('sim-loading-point')
  point_one.classList.add('sim-loading-point_first')
  point_two.classList.add('sim-loading-point')
  point_two.classList.add('sim-loading-point_second')
  point_three.classList.add('sim-loading-point')
  point_three.classList.add('sim-loading-point_third')
  load.appendChild(point_one)
  load.appendChild(point_two)
  load.appendChild(point_three)
  board.appendChild(load)
  container.appendChild(board)
  if (binding.value) {
    container.style.display = 'block'
  } else {
    container.style.display = 'none'
  }
  el.appendChild(container)
})
