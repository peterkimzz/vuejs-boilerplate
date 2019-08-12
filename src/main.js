import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// localization
// import i18n from './plugins/i18n'

// google anayltics
import './plugins/vue-analytics'

// meta
import './plugins/vue-meta'

// http
import axios from './plugins/axios'

// Scrollreavel
import './plugins/vue-scroll-reveal'

// vue scrollto
import './plugins/vue-scrollto'

// Ant Design
// import './plugins/ant-design'

// modal
import './plugins/vue-js-modal'

// dateformat, timezone control
import './plugins/vue-moment'

import './assets/scss/index.scss'

Vue.prototype.$axios = axios

export default new Vue({
  router,
  store,
  // i18n,
  render: h => h(App)
}).$mount('#app')
