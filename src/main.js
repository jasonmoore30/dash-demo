// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Roster from '@/components/Roster'
import Alumni from '@/components/Alumni'

import router from './router'
import Vuetify from 'vuetify'

Vue.use(Vuetify)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
    'home': Home,
    'main-page': Main,
    'login': Login,
    'register': Register,
    'roster': Roster,
    'alumni': Alumni
  }
})
