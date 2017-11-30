<template>
	<div class="menu-wrapper content-wrapper text-center">
		<router-link :to="'/newgame'" class="btn btn-primary btn-nav btn-new-game" @click="getFleetBoard()">New Game</router-link>
			<br /><br />
		<router-link :to="'/hiscore'" class="btn btn-primary btn-nav">High Score</router-link>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'StartContent',
  data () {
    return {}
	},
	computed: {
		...mapState(['username', 'fleetBoard'])
	},
	methods: {
		...mapActions(['getFleetBoard'])
	}
}
</script>

<style scoped>
	.btn-new-game {
		background: #8BC34A;
		border-color:  #8BC34A;
	}

	.red {
		background: crimson !important;
	}

	.btn-new-game:hover {
		background: #4CAF50;
		border-color:  #4CAF50;
	}
</style>