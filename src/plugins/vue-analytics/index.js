import Vue from 'vue'
import VueAnalytics from 'vue-analytics'
import router from '../../router'

const id = 'UA-XXXXXXXXX-X'
const isProd = process.env.NODE_ENV === 'production'

Vue.use(VueAnalytics, {
  id,
  router,
  // autoTracking: {
  //   pageviewOnLoad: false
  // },
  debug: {
    enable: !isProd,
    sendHitTask: isProd
  }
})
