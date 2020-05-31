import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import store from './store'
import router from './router'

import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
