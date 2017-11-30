<template>
  <div class="secondPlayer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6" :hidden="hidenPanel">
          <div class="row">
            <div class="col-md-1 col-tile-1" v-for="data in datas"><button type="button" class="btn btn-primary" @click="countRound(data)" :disabled="panelBtn"></button></div>
          </div>
        </div>
        <div class="col-md-6">
          <h2 style="margin-top: 2em">Name Here</h2>
          <button type="button" class="btn btn-success" style="width: 100%; margin-top: 5em" @click="startGame" :disabled="atkBtn">Attack!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SecondPlayer',
    data () {
      return {
        atkBtn: false,
        hidenPanel: true,
        panelBtn: false,
        counter: 0,
        datas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
      }
    },
    methods: {
      startGame () {
        this.atkBtn = true
        this.hidenPanel = false
      },
      countRound (data) {
        this.counter++
        if (this.counter >= 3) {
          this.panelBtn = true
          this.atkBtn = false
          this.counter = 0
        }
      }
    }
  }
</script>

<style>
.secondPlayer button {
  width: 50px;
  height: 50px;
  margin: 5px
}
.secondPlayer .container-fluid {
  height: 100vh;
  padding-top: 20vh;
  padding-bottom: 20vh;
  background-color: #4fc7ef
}
</style>
