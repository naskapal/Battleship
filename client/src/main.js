// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAn8ln_F0Ayj8XMFpE4yNy_8MQ7GwDVuoU",
  authDomain: "battleship-hacktiv8.firebaseapp.com",
  databaseURL: "https://battleship-hacktiv8.firebaseio.com",
  projectId: "battleship-hacktiv8",
  storageBucket: "battleship-hacktiv8.appspot.com",
  messagingSenderId: "166654376018"
}
firebase.initializeApp(config)

Vue.config.productionTip = false

Vue.prototype.$db = firebase.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
