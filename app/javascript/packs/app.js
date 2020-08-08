import Vue from 'vue'
import HomeContainer from '../components/home_container.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(HomeContainer)
  }).$mount()
  document.body.appendChild(app.$el)
})
