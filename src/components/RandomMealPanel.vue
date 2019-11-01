<template>
	<transition name="slide">
		
		<div class="mt-10">
		
		<v-row class="mealCard py-7 px-7" container v-show="show">
			
			<v-col md="4">
				<v-card class="card" style="border-radius:0px;">
					<v-img class="white--text align-end" height="auto" :src="meal.strMealThumb">
					</v-img>
				</v-card>
			</v-col>

			<v-col md="8" class="text-left pl-lg-10 px-2 pt-2 pa-0">
				<p style="font-size:20px;" class="font-weight-bold caption pa-0 ma-0 text-capitalize">{{ meal.strArea }} > {{ meal.strCategory }}</p>
				<h1 class="title text-capitalize">{{ meal.strMeal }}</h1>
				<p class="tag font-weight-medium text-capitalize">{{ meal.strTags }}</p>
				<v-card-text class="font-weight-medium dark--text px-0 text-capitalize text-justify">{{ meal.strInstructions }}</v-card-text>
			</v-col>

		</v-row>

	</div>
	
	</transition>
</template>

<script>

  export default{
    name: 'RandomMeal',
    props: ["meal","show"],
    
    data(){
		return{
		}
    },

	methods:{
	},

  };
</script>

<style scoped>
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