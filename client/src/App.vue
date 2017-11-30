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
    background: #4fc7ef url('./assets/battleship.png');
    background-repeat: none;
    background-size:  cover;
    height:  100vh;
  }

  *:hover {
    transition: ease-in 0.3s all;
  }

  body {
    background: #4fc7ef;
    font-family: 'Schoolbell', cursive;
  }

  .full-width {
    width: 100%;
    height:  auto;
  }

  .form-label {
    color: gold;
    text-shadow: 3px 2px #963333;
    font-size: 4rem;
  }

  .game-input {
    background: #FFEB3B;
    border-radius: 2rem !important;
    font-size: 3rem;
    height: 6rem;
  }

  .small-mt {
    margin-top: 4rem;
  }

  .content-wrapper {
    /*background: #fff;*/
    padding: 2rem;
    /*min-height: 30vh;*/
  }

  .extra-wrapper {
    background:  rgba(333,333,333, 0.7);
    border-radius: 10px
  }

  .no-mt {
    margin-top: 0;
  }

  table {
    font-size: 2rem;
  }

  .btn-nav {
    font-size: 3rem;
    padding: 1rem 3rem;
    background:  #FF9800;
    border-color: #FF9800;
  }

  .btn-nav:hover {
    background: #FF5722;
    border-color: #FF5722;
  }
</style>
