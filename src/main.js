import Vue from 'vue'
import VueI18n from 'vue-i18n'
import store from './store'
import i18n from './lang'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueI18n, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
