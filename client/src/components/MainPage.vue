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
    components: {
      FirstPlayer,
      SecondPlayer
    }
  }
</script>

<style>

</style>
