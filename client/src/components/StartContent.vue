<template>
	<div class="menu-wrapper content-wrapper text-center">
		<router-link :to="'/newgame'" class="btn btn-success btn-lg">New Game</router-link>
		<router-link :to="'/hiscore'" class="btn btn-warning btn-lg">High Score</router-link>
	</div>
</template>

<script>
	export default {
		name: 'StartContent',
		data () {
			return {

			}
		}
	}
</script>

<style scoped>

</style>