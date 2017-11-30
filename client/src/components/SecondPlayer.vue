<template>
  <div class="secondPlayer">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6" :hidden="hidenPanel">
          <div class="row">
            <div class="col-md-1 col-tile-1" v-for="(data, index) in datas"><button type="button" class="btn btn-primary" @click="countRound(data, index, $event)" :disabled="panelBtn" :id="`player2-${index}`"></button></div>
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
        isActive: false,
        backgroundColor: 'red',
        counter: 0,
        datas: [[0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6], [0,7], [0,8], [0,9], [1,0], [1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9], [2,0], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9], [3,0], [3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9], [4,0], [4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9]]
      }
    },
    methods: {
      startGame () {
        this.atkBtn = true
        this.hidenPanel = false
      },
      countRound (data, index, event) {
        console.log(data);
        document.querySelector(`#${event.currentTarget.id}`).style.backgroundColor = 'red'
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
  background-color: #84b3ff
}
</style>
