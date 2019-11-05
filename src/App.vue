<template>
  <v-app>
    
    <div id="nav">
    </div>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list>
        
        <router-link to="/">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>


        <router-link to="/random">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-shuffle-variant</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Random meal
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>


        <router-link to="/category">
          <v-list-item>
            <v-list-item-action>
              <v-icon>mdi-chemical-weapon</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Categories
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        
      
      </v-list>
    </v-navigation-drawer>

    
    <v-app-bar app clipped-left class="elevation-2">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        🍔
        Hunger Games
      </v-toolbar-title>
    </v-app-bar>

    
    <v-content style="padding:0px;">
    
      <transition>
          <dialog-drag v-if="showMode" title="🍔 Hi there!" style="position: fixed; cursor:pointer;">
          <v-sheet class="pa-4">
              <p v-show="light">Only in the dark, can one see the stars!</p>
              <p v-show="!light">Darkness can't drive out itself, only light can do that!</p>
              <v-switch class="pa-2" @change="mode" inset label="Dark Mode">
              </v-switch>

              <v-btn class="" @click="showMode = !showMode" color="warning" text>
              Hide <i class="fas fa-eye-slash"></i>
              </v-btn>
          </v-sheet>
          </dialog-drag>

          <dialog-drag v-else title="🍔 Hi there!" style="position: fixed; cursor:pointer;">
          <v-sheet class="pa-4">
              <v-btn class="" @click="showMode = !showMode" color="warning" text>
              Show <i class="fas fa-eye"></i>
              </v-btn>
          </v-sheet>
          </dialog-drag>
      
      </transition>
      
      <router-view/>
    
    </v-content>


    <div class="divider"></div>

    <v-footer padless class="">
      <v-card flat tile class="dark--text text-center pa-7" style="width:100%;">
        
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-1 dark--text" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <back-to-top bottom="50px" visibleoffset="1300" right="50px">
          <button type="button" class="btn btn-info btn-to-top"><i class="fa fa-chevron-up"></i></button>
        </back-to-top>

        <v-card-text class="dark--text pt-0">
          Hunger games 🍔, is a all-about-food platform that is publicly saying that: "There are people in the world so hungry, that God cannot appear to them except in the form of bread".
        </v-card-text>


        <v-divider></v-divider>

        <v-card-text class="dark--text">
          <strong>Developed with <i class="red--text fas fa-heart"></i> of 🍔 by <a href="https://github.com/ishoshot">Oluwatobi</a> </strong> &copy; {{ new Date().getFullYear() }}
        </v-card-text>
      
      </v-card>
    </v-footer>


  </v-app>
</template>


<script>
import BackToTop from 'vue-backtotop';
import DialogDrag from 'vue-dialog-drag';

export default {
  name: 'App',
  components: {
    BackToTop,
    DialogDrag,
  },
  data: () => ({
    drawer: false,
    icons: [
      'fab fa-github',
      'fab fa-twitter',
      'fab fa-linkedin',
      'fab fa-facebook',
      'fab fa-instagram',
    ],
    light:true,
    showMode:true,
  }),

  methods:{
    mode(){
        this.light = !this.light;
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style src='vue-dialog-drag/dist/vue-dialog-drag.css'></style>

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

a{
  text-decoration: none;
}


.divider{
  margin-top: 10%;
  background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
  padding: 3px;
}

.btn-to-top {
  width: 60px;
  height: 60px;
  background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
  color: #fff;
  padding: 10px 16px;
  border-radius: 50%;
  font-size: 22px;
  line-height: 22px;
}

.dialog-header{
  background-image: linear-gradient(90deg, #020024 0%, #090979 35%, #00d4ff 100%);
}

.dialog-drag{
  border: none;
  box-shadow: none;
  max-width: 250px;
}

.dialog-body{
  background-color: transparent;
  padding:0px !important;
}

</style>
