<template>
  <div class="container">
    <div class="row">
      <div class="col-md-7" :hidden="panelBtn">
        <div class="row">
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
        </div>
        <div class="row">
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
        </div>
        <div class="row">
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
        </div>
        <div class="row">
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
        </div>
        <div class="row">
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
          <div class="col-md-1"><button type="button" class="btn btn-primary"></button></div>
        </div>
      </div>
      <div class="col-md-5">
        <h2 style="margin-top: 2em">Name Here</h2>
        <button type="button" class="btn btn-success" style="width: 100%; margin-top: 5em" @click="startGame" :disabled="atkBtn">Attack!</button>
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
        panelBtn: true
      }
    },
    methods: {
      startGame () {
        this.atkBtn = true
        this.panelBtn = false
      }
    }
  }
</script>

<style>
button {
  width: 50px;
  height: 50px;
  margin: 5px
}
</style>
