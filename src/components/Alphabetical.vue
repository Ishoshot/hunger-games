<template>
	<transition name="slide">
				
	<v-sheet class="top">
		<v-row class="pb-7 px-4 px-lg-8">
			<v-col lg="4" v-for="meal in meals" v-bind:key="meal.idCategory" class="pa-0 my-5 px-2">
				<v-card class="" height="100%">
					<v-img class="dark--text align-end" height="200px" :src="meal.strMealThumb">
					</v-img>

					<v-card-title class="font-weight-bold px-5">{{ meal.strMeal }}</v-card-title>
					<span class="text--left align-end font-weight-medium">{{ meal.strCategory }} > {{ meal.strArea }}</span>

					<v-card-text class="text--primary text-justify">
					
					<v-rating class="text-left" :value="4.5" color="amber" dense size="18">
					</v-rating>

					<div class="mt-4">{{ meal.strInstructions.substring(0,300) }}{{ '...' }}</div>
					</v-card-text>

					<v-card-actions>

					</v-card-actions>
				</v-card>
			</v-col>

		</v-row>


		<v-sheet v-show="me">
			<v-snackbar v-model="snackbar" :timeout="timeout">
				{{ text }}
				
				<v-btn color="blue" text @click="snackbar = false">
				Close
				</v-btn>
				
			</v-snackbar>
		</v-sheet>

	</v-sheet>
	
	</transition>
</template>

<script>

  export default{
    name: 'Alphabetical',
    props:['meals','message'],
    
    data(){
		return{
			me: true,
			snackbar: true,
			text: 'No Meal found.',
			timeout: 1000,
		}
    },

  };
</script>

<style scoped>
.top{
	margin-top: 5%;
	background-color:transparent;
}
</style>	