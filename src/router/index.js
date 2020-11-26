import Vue from 'vue'
import Router from 'vue-router'
import index from '../view/index/index'

Vue.use(Router)

export default new Router({
  routes: [
    {name:'index', path:'/', component:index}
  ]
})
