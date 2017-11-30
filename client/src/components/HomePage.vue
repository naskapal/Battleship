<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<MainLogo></MainLogo>

				<router-view></router-view>
			</div>
		</div>
	</div><!-- /.container -->
</template>

<script>
	import MainLogo from "@/components/MainLogo";
	import StartContent from "@/components/StartContent";

	export default {
		name: 'HomePage',
		components: {
			MainLogo,
			StartContent
	},
	  data () {
	    return {

	    }
	  }
}
</script>

<style scoped>
	.menu-wrapper  {
		margin-top: 4rem;
	}
</style>