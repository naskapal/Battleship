<template>
	<div class="content-wrapper small-mt">
		<div class="input-group full-width text-center">
			<label class="form-label text-center">Username Kamu</label>
			<input type="text" class="form-control game-input" />
		</div>

		<div class="small-mt text-center">
			<router-link :to="'/main-page'" class="btn btn-nav btn-success">Lanjut</router-link>
		</div><!-- /.small-mt text-center -->
	</div><!-- /.wrapper -->
</template>

<script>
	export default {
	  name: 'ShowName',
	  data () {
	    return {

    }
  }
	}
</script>

<style scoped>

</style>