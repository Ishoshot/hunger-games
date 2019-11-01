<template>
<transition name="slide">
			
	<v-content app>	
		<!--  -->
		<v-col md="12" v-if="!times > 0">
			<v-card class="card">
				<h2>Feeling Hungry?</h2>
				<v-card-text>Get a random meal by clicking below</v-card-text>
				<v-btn class="ma-2" @click="getMeal()" color="primary">
					Get meal 🍔
				</v-btn>
			</v-card>
		</v-col>

		<!--  -->

		<v-col md="12" v-else>
			<v-card class="card">
				<h2>Feeling Hungry?</h2>
				<v-card-text>Don't like it ?</v-card-text>
				<v-btn class="ma-2" @click="getMeal()" color="primary">
					Get another 🍔
				</v-btn>
			</v-card>
		</v-col>
		<!--  -->
		
	<RandomMeal v-bind:meal="meal" :show="show"/>

	</v-content>
	
</transition>
</template>

<script>
import axios from 'axios';
import RandomMeal from "./RandomMealPanel.vue";

export default{
    name: 'RandomComp',
    components:{
    RandomMeal,
    },
    
    data(){
		return{
			meal:[],
			times:0,
			show:false,
		}
    },

	methods:{
		getMeal(){
			this.times ++;
			axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
			.then(res => (this.meal = res.data.meals[0]))
			// .catch(err => console.log(err));
			this.show = true;
		},
	},

  };
</script>

<style scoped>
.card{
	background: transparent; 
	border: none; 
	box-shadow: none;
}
</style>