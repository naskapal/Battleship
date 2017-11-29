<template>
  <div id="app">
    <div class="container">
       <router-view/>
    </div>
    <!-- /.container -->
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

  #app {
    background: #4fc7ef;
  }

  body {
    background: #4fc7ef;
  }

  .full-width {
    width: 100%;
    height:  auto;
  }

  .small-mt {
    margin-top: 4rem;
  }

  .content-wrapper {
    background: #fff;
    padding: 2rem;
    /*min-height: 30vh;*/
  }

  .no-mt {
    margin-top: 0;
  }
</style>
