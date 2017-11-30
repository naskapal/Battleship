<template>
  <div>
    <h1>TEST GET FLEET BOARD</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      fleetBoard: []
    }
  },
  methods: {
    getFleetBoard () {
      this.$https.get('/')
      .then(({data}) => {
        console.log('uyeyeyeye')
        console.log(data)
      })
      .catch(err => {
        console.log('lalalallalala')
        console.error(err)
      })
    }
  },
  created () {
    this.getFleetBoard()
  }
}
</script>

<style>

</style>
