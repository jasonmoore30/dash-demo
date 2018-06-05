<template>
  <v-app light>
    <!-- <v-container fluid>
    <v-navigation-drawer
      clipped
      v-model="drawer">
      <v-list class="pt-2" dense>
        <v-list-tile v-for="item in items" :key="item.title" :to="item.url">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed class="deep-purple" dark>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>CEL Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-xs-center" id="prof-icon">
          <v-layout row wrap>
             I want my menu items to display in line, not over under!
            <v-menu
              offset-x
              :close-oncontent-click="true"
              :allow-overflow="true"
              :nudge-width="75"
              v-model="menu"
            >
              <v-btn icon slot="activator">
                <v-icon dark>account_circle</v-icon>
                <v-icon dark>arrow_drop_down</v-icon>
              </v-btn>
              <v-list>
                <div v-if="isAuth" id="menu-content">
                     <v-layout column wrap> 
                      <v-list-tile v-for="option in options" :key="option.title" :to="option.url">
                        <v-list-tile-content>
                           <v-flex xs12>
                            <v-icon>{{ option.icon }}</v-icon>
                          </v-flex>
                          <v-flex xs12>
                          <v-list-tile-title>{{ option.title }}</v-list-tile-title>
                          {{ option.title }}
                          </v-flex>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-layout> 
                </div>
                <div v-else id="no-auth-menu-content">
                  <v-layout row wrap>
                    <v-list-tile v-for="option in noAuthOptions" :key="option.title" :to="option.url">
                      <v-list-tile-content>
                        <v-layout row wrap>
                          <v-flex xs12>
                            <v-icon>{{ option.icon }}</v-icon>
                            <v-list-tile-title>{{ option.title }}</v-list-tile-title>
                          </v-flex>
                        </v-layout>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-layout>
                </div>
              </v-list>
            </v-menu>
          </v-layout>
      </div>
    </v-toolbar>
    <main>
      <div id="main-content">
        <router-view></router-view>
      </div>
    </main>
  </v-container> -->



 <v-container>
  <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          :to="item.url"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>
      <router-view/>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-container>
</v-app>
</template>

<script>
import Home from './Home'
import Roster from './Roster'
import Alumni from './Alumni'
import Profile from './Profile'
import Register from './Register'
export default {
  name: 'main-page',
  components: {
    Home,
    Roster,
    Alumni,
    Profile,
    Register
  },
  data () {
    return {
      isAuth: true,
      menu: false,
      items: [
        { title: 'Home', icon: 'home', name: 'home', url: '/' },
        { title: 'Find a Dataset', icon: 'search', name: 'register', url: '/register' },
        { title: 'Explore Projects', icon: 'info', name: 'roster', url: '/roster' },
        { title: 'Mapping Tool', icon: 'map', name: 'alumni', url: '/alumni' },
        { title: 'Charts and Graphs', icon: 'insert_chart', name: 'chart', url: '/alumni' }
      ],
      options: [
        { title: 'My Profile', icon: 'face', url: '/profile' },
        { title: 'Sign Out', icon: 'exit_to_app', url: '/' }
      ],
      noAuthOptions: [
        { title: 'Register', icon: 'face', url: '/register' },
        { title: 'Sign In', icon: 'exit_to_app', url: '/signin' }
      ],
      right: null,
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style>

</style>
