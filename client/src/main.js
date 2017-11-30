// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import firebase from 'firebase'
import store from './store'

var config = {
  apiKey: "AIzaSyAGN2E61wzkrFov7RCP_HFzKpR54ErXHKM",
  authDomain: "yonathan-e91f4.firebaseapp.com",
  databaseURL: "https://yonathan-e91f4.firebaseio.com",
  projectId: "yonathan-e91f4",
  storageBucket: "yonathan-e91f4.appspot.com",
  messagingSenderId: "125607102460"
}
firebase.initializeApp(config)

Vue.prototype.$https = axios.create({
  baseURL: 'https://us-central1-test-project-186802.cloudfunctions.net/ship-initializer'
})

Vue.config.productionTip = false

Vue.prototype.$db = firebase.database()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
