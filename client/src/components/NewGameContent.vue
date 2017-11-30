<template>
	<div class="content-wrapper small-mt">
		<div class="input-group full-width text-center">
			<label class="form-label text-center">Username Kamu</label>
			<input type="text" class="form-control game-input" />
		</div>

		<div class="small-mt text-center">
			<router-link :to="'/main-page'" class="btn btn-nav btn-success" @click="saveToFireBase()">Lanjut</router-link>
		</div><!-- /.small-mt text-center -->
	</div><!-- /.wrapper -->
</template>

<script>
	import { mapState, mapActions } from 'vuex'
	export default {
		name: 'ShowName',
		data () {
			return {
				username: ''
			}
		},
		computed: {
			...mapState(['username', 'fleetBoard'])
		},
		methods: {
			...mapActions(['saveToFireBase'])
		}
	}
</script>

<style scoped>

</style>
