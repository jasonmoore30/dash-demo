import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Roster from '@/components/Roster'
import Alumni from '@/components/Alumni'
import Profile from '@/components/Profile'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Gpa from '@/components/Gpa'
import Kaleidoscope from '@/components/Kaleidoscope'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/',
          component: Home
        },
        {
          path: 'roster',
          component: Roster
        },
        {
          path: 'alumni',
          component: Alumni
        },
        {
          path: 'profile',
          component: Profile
        },
        {
          path: 'register',
          component: Register
        },
        {
          path: 'gpa',
          component: Gpa
        },
        {
          path: 'kaleidoscope',
          component: Kaleidoscope
        }
      ]
    }
  ]
})
