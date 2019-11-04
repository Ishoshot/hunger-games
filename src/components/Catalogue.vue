<template>
  <v-content>
    <v-row app class="px-4 px-lg-5">
      <v-col md="4">
        <v-card class="mx-auto">
          <v-img class="white--text align-end" height="200px" src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
            <v-card-title>GET RANDOM MEALS</v-card-title>
          </v-img>

          <v-card-text class="text--primary text-justify">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </v-card-text>

          <v-card-actions>
            <v-btn class="ma-2" @click="goRandom" outlined color="orange" text>
              Let's do this
            </v-btn>

           <div v-if="loading" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

          </v-card-actions>
        </v-card>
      </v-col>


      <v-col md="4">  
        <v-card class="mx-auto">
          <v-img class="white--text align-end" height="200px" src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
            <v-card-title>MEAL CATEGORIES</v-card-title>
          </v-img>

          <v-card-text class="text--primary text-justify">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </v-card-text>

          <v-card-actions>
            <v-btn class="ma-2" @click="goCategories" outlined color="orange" text>
              Let's do this
            </v-btn>

           <div v-if="loadingOne" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>

          </v-card-actions>
        </v-card>
      </v-col>


      <v-col md="4">  
        <v-card class="mx-auto">
          <v-img class="white--text align-end" height="200px" src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
            <v-card-title>CUSTOM MEALS - FILTER</v-card-title>
          </v-img>

          <v-card-text class="text--primary text-justify">
            <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          </v-card-text>

          <v-card-actions>
            <v-btn v-if="!links" class="ma-2" @click="showLinks" outlined color="orange" text>
              Let's do this
            </v-btn>

            <v-btn v-else class="ma-2" @click="links = false" color="orange" text>
              <v-icon>fas fa-times</v-icon>
            </v-btn>


           <div v-if="loadingTwo" class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </v-card-actions>
          
            <div id="actions" v-show="links" style="transition: 1s all;">
              <v-list rounded>
                  <v-list-item-group v-model="item" color="primary">
                      
                       <router-link to="/random">
                        <v-list-item>
                        
                          <v-list-item-icon>
                            <v-icon>fas fa-sort</v-icon>
                          </v-list-item-icon>

                          <v-list-item-content class="text-left">
                            <v-list-item-title>Alphabet</v-list-item-title>
                          </v-list-item-content>
                        
                        </v-list-item>
                      </router-link>

                      <v-list-item>
                      
                        <v-list-item-icon>
                          <v-icon>fas fa-sort</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content class="text-left">
                          <v-list-item-title>Alphabet</v-list-item-title>
                        </v-list-item-content>
                      
                      </v-list-item>

                      <v-list-item>
                      
                        <v-list-item-icon>
                          <v-icon>fas fa-sort</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content class="text-left">
                          <v-list-item-title>Alphabet</v-list-item-title>
                        </v-list-item-content>
                      
                      </v-list-item>

                    </v-list-item-group>
                </v-list>
            </div>
        </v-card>
      </v-col>

 <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>



    </v-row>
</v-content>  
</template>

<script>
  export default{
    name: 'Hungry',
    
    data(){
      return{
        loading:false,
        loadingOne:false,
        loadingTwo:false,
        links:false,
      }
    },

    methods:{
      goRandom(){
        this.loading = true;
        setTimeout(function () {
            this.$router.push({path: "/random"});
          }.bind(this),2000);
      },

      goCategories(){
        this.loadingOne = true;
        setTimeout(function () {
            this.$router.push({path: "/category"});
          }.bind(this),2000);
      },

      showLinks(){
        this.loadingTwo = true;
        setTimeout(function () {
            this.links = true;
            this.loadingTwo = false;
          }.bind(this),2000);
      },
    },

  };
</script>

<style>

.lds-ellipsis {
  display: inline-block;
  float: right;
  position: relative;
  width: 64px;
  height: 64px;
}

.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #ff9800;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}

a{
  text-decoration: none;
}
  
</style>