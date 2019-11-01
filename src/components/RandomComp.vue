<template>
<transition name="slide">
			
	<v-content app>	
		<!--  -->
		<v-col md="12">
			<v-card class="card">
				<h2>Not Satisfied?</h2>
				<v-card-text class="font-weight-bold">Slimmy, Yet Satisfying</v-card-text>
				<v-btn class="ma-2" @click="getMeal()" color="primary">
					Get Another 🍔
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
			show:false,
		}
    },

    mounted(){
    this.getMeal();
    },

	methods:{
		getMeal(){
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