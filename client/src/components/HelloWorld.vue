<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    addUser () {
      this.$db.ref('battleship').push({
        name: 'Yonathan',
        fleet: [[1, 3], [1, 4], [1, 5]]
      })
    }
  },
  created () {
    this.addUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
