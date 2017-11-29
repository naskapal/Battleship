// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAGN2E61wzkrFov7RCP_HFzKpR54ErXHKM',
  authDomain: 'yonathan-e91f4.firebaseapp.com',
  databaseURL: 'https://yonathan-e91f4.firebaseio.com',
  storageBucket: 'yonathan-e91f4.appspot.com',
  messagingSenderId: '125607102460',
  projectId: 'yonathan-e91f4'
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
