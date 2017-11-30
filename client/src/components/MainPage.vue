<template>
  <div class="main-page">
    <FirstPlayer></FirstPlayer>
    <SecondPlayer></SecondPlayer>
  </div>
</template>

<script>
  import FirstPlayer from '@/components/FirstPlayer'
  import SecondPlayer from '@/components/SecondPlayer'
  export default {
    name: 'MainPage',
    data () {
      return {
        fleetsData1: []
      }
    },
    components: {
      FirstPlayer,
      SecondPlayer
    },
    methods: {
      getFleets () {
        this.$https.get('/')
        .then(({data}) => {
          this.fleetsData = data
        })
        .catch(err => console.log(err))
      }
    },
    created () {
      this.getFleets()
    }
  }
</script>

<style>

</style>
