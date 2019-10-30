<template>
	<transition name="slide">
		<v-row app class="mt-10">
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


			<!-- MEAL DISPLAY PANEL -->
			
			<div class="mealCard row mt-10">
				
				<v-col md="4">
					<v-card class="card" style="border-radius:0px;">
						<v-img class="white--text align-end" height="200px" :src="meals.strMealThumb">
						</v-img>
					</v-card>
				</v-col>

				<v-col md="4">
					<v-card class="card" style="border-radius:0px;">
						<v-img class="white--text align-end" height="200px" :src="meals.strMealThumb">
						</v-img>
					</v-card>
				</v-col>


			</div>
			<!--  -->

		</v-row>

	</transition>
</template>

<script>
import axios from 'axios';

  export default{
    name: 'RandomComp',
    
    data(){
		return{
			meals:[],
			times:0,
		}
    },

	methods:{
		getMeal(){
			this.times ++;
			axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
			.then(res => (this.meals = res.data.meals[0]))
			// .catch(err => console.log(err));
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

.mealCard{
	background: rgba(0,0,0,0.03); 
	border: none; 
	padding: 5%;
	box-shadow: none;
}
</style>