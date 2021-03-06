import Vue from 'vue'
import Router from 'vue-router'

// layouts
import DefaultLayout from 'src/layouts/default'

// views
import Home from 'src/pages'

Vue.use(Router)

const defaultViews = {
  path: '/',
  component: DefaultLayout,
  children: [
    {
      path: '',
      component: Home
    },
    {
      path: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../pages/About')
    }
  ]
}

const routes = [defaultViews]

const router = new Router({
  mode: 'history',
  linkExactActiveClass: 'active',
  routes
})

export default router
