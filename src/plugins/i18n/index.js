import Vue from 'vue'
import i18n from 'vue-i18n'
import messages from './messages.json'

Vue.use(i18n)

export default new i18n({
  locale: 'ko',
  messages
})
