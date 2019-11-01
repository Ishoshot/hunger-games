<template>
  <v-app>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
      
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title @click="mode" style="cursor: pointer;">Theme</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      
      </v-list>
    </v-navigation-drawer>

    
    <v-app-bar app clipped-left class="elevation-2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Hunger Games</v-toolbar-title>
    </v-app-bar>

    
    <v-content style="padding:0px;">
      <transition>
        <router-view/>
      </transition>
    </v-content>

    <div class="divider"></div>
    <v-footer padless class="footer">
      <v-card flat tile class="dark--text text-center pa-7">
        
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-1 dark--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="dark--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="dark--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>


  </v-app>
</template>

<script>
// import Hungry from './components/Hungry.vue';

export default {
  name: 'App',
  components: {
    // Hungry,
  },
  data: () => ({
    drawer: false,
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram',
    ],
  }),

  methods:{
    mode(){
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style>
  #app {
  overflow-x: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.footer{
}

.divider{
  margin-top: 10%;
  background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
  padding: 3px;
}
</style>
