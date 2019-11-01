<template>
	<transition name="slide">
			
	<v-content app>	

		<v-row class="mt-6">
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
			
			<v-col md="12" v-show="show" class="mealCard mt-10 py-7 px-10">

				<v-row>

					<v-col md="4">
						<v-card class="card" style="border-radius:0px;">
							<v-img class="white--text align-end" height="auto" :src="meals.strMealThumb">
							</v-img>
						</v-card>
					</v-col>

					<v-col md="8" class="text-left pl-lg-10 px-2 pt-2 pa-0">
						<p style="font-size:20px;" class="font-weight-bold caption pa-0 ma-0 text-capitalize">{{ meals.strArea }} > {{ meals.strCategory }}</p>
						<h1 class="title text-capitalize">{{ meals.strMeal }}</h1>
						<p class="tag font-weight-medium text-capitalize">{{ meals.strTags }}</p>
						<v-card-text class="font-weight-medium dark--text px-0 text-capitalize text-justify">{{ meals.strInstructions }}</v-card-text>
					</v-col>

				</v-row>

			</v-col>

			<!--  -->

		</v-row>

	</v-content>
	
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
			show:false,
		}
    },

	methods:{
		getMeal(){
			this.times ++;
			axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
			.then(res => (this.meals = res.data.meals[0]))
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

.mealCard{
	background: rgba(0,0,0,0.03); 
	border: none;
	box-shadow: none;
}

.tag{
	font-size: 13px;
	color: #;
	font-variant: small-caps;
}

</style>