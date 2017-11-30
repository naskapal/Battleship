<template>
	<div class="row">
		<div class="col-md-12">
				<MainLogo></MainLogo>

				<router-view></router-view>
		</div>
	</div>
</template>

<script>
<<<<<<< HEAD
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
=======
import MainLogo from '@/components/MainLogo'
import StartContent from '@/components/StartContent'
export default {
	name: 'HomePage',
	components: {
		MainLogo,
		StartContent
	},
	data () {
		return {}
>>>>>>> 4decc36fe1b01e45dcb88e03e4bee3c89abbeac1
	}
}
</script>

<style scoped>
	.menu-wrapper  {
		margin-top: 4rem;
	}
</style>