<template>

<transition name="slide">

<v-content class="topMargin">

<v-row app>

	<v-dialog v-model="dialog" persistent max-width="290">
		<v-card>
			<v-card-title class="headline">Hunger games 🍔</v-card-title>
			<v-card-text>Dear You, Do you know you're being redirected to the home page?</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="red" text @click="dialog = false">Disagree</v-btn>
				<v-btn color="green" text @click="gotoHome">Agree</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>

    <v-col md="12" class="pa-0" style="cursor: pointer" @click="dialog = true">
        <v-card>
          <v-img class="white--text align-end" height="auto" src="https://s3.envato.com/files/221341756/preview-images/404_03.png">
          </v-img>
        </v-card>
    </v-col>

  </v-row>

</v-content>

</transition>

</template>


<script>
	export default{	
		name:'FourOhFour',

		data(){
			return{
				dialog: false,
			}
		},

methods:{
	gotoHome(){
		setTimeout(function () {
        this.$router.push({path: "/"});
        }.bind(this),1000);
	},
},
	
	};
</script>

<style type="text/css">
	.topMargin{
		margin-top: -5%;
		margin-bottom: -10%;
	}
</style>
