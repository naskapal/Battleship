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
          console.log('ini datanya ', data)
          this.fleetsData1 = data
          this.$db.ref('/database').set({
            username: '',
            fleet: this.fleetsData1
          })
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
