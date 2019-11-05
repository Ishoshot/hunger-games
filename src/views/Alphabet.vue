<template>
  <v-content>

	<v-sheet style="background:transparent; text-align: center;">
    
    <h1 color="title">Click On an Alphabet to get Meals 🍔</h1>

	<v-chip-group class="mt-3" active-class="warning accent-4 white--text" column> 
	
	<v-row justify="space-around" class="mx-5">
		<v-chip v-for="(alphabet,index) in alphabets" class="mx-1 my-3" :key="alphabet" @click="getMeals(index)">{{ alphabet }}</v-chip>
	</v-row>
	
	</v-chip-group>
	
	</v-sheet>
    
    <Alphabetical :meals="meals" />

  </v-content>
</template>

<script>
import axios from 'axios';
import Alphabetical from '@/components/Alphabetical.vue'


export default {
  name: 'alphabet',
  
	components: {
		Alphabetical,
	},

	data(){
		return{
			meals:[],
			alphabets:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
			query:'',
		}
	},

	mounted(){
    this.getMeals();
    },

	methods:{
		getMeals(i){
			this.query = this.alphabets[i];
			axios.get("https://www.themealdb.com/api/json/v1/1/search.php?f="+this.query)
			.then(res =>(this.meals = res.data.meals))
		},
	},
};
</script>
