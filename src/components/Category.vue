<template>
	<transition name="slide">
				
	<v-sheet class="top">
		<v-row class="py-7 px-4 px-lg-5">
			<v-col lg="4" v-for="category in categories" v-bind:key="category.idCategory" class="pa-0 my-5 px-2">
				<v-card class="" height="100%">
					<v-img class="dark--text align-end" height="200px" :src="category.strCategoryThumb">
					</v-img>

					<v-card-title class="font-weight-bold px-5">{{ category.strCategory }}</v-card-title>

					<v-card-text class="text--primary text-justify">
					
					<v-rating class="text-left" :value="4.5" color="amber" dense size="18">
					</v-rating>

					<div class="mt-4">{{ category.strCategoryDescription.substring(0,300) }}{{ '...' }}</div>
					</v-card-text>

					<v-card-actions>

					</v-card-actions>
				</v-card>
			</v-col>
		</v-row>
	</v-sheet>
	
	</transition>
</template>

<script>
import axios from 'axios';

  export default{
    name: 'Category',
    
    data(){
		return{
			categories:[],
		}
    },

	mounted(){
		this.getCategories();
	},

	methods:{
		getCategories(){
			axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
			.then(res => (this.categories = res.data.categories))
		},
	},

  };
</script>

<style scoped>
.top{
	background-color:transparent;
}
</style>	