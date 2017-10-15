// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import titleMixin from './util/title'
import descriptionMixin from './util/description'
import router from './router'
import VueAnalytics from 'vue-analytics'
import './assets/style/style.scss'

Vue.mixin(titleMixin)
Vue.mixin(descriptionMixin)
Vue.config.productionTip = false
Vue.use(VueAnalytics, {
  id: 'UA-22728284-8',
  router
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
