import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import firebase from 'firebase'

const https = axios.create({
  baseURL: 'https://us-central1-test-project-186802.cloudfunctions.net/ship-initializer'
})

// var config = {
//   apiKey: "AIzaSyAn8ln_F0Ayj8XMFpE4yNy_8MQ7GwDVuoU",
//   authDomain: "battleship-hacktiv8.firebaseapp.com",
//   databaseURL: "https://battleship-hacktiv8.firebaseio.com",
//   projectId: "battleship-hacktiv8",
//   storageBucket: "battleship-hacktiv8.appspot.com",
//   messagingSenderId: "166654376018"
// }
// firebase.initializeApp(config)

// Vue.prototype.$dbs = firebase.database()

Vue.use(Vuex)

const state = {
  username: '',
  fleetBoard: []
}

const mutations = {
  setFleetBoard (state, payload) {
    console.log('ini payloadny ', payload)
    state.fleetBoard = payload
  },
  setUserName (state, payload) {
    console.log('ini masuk set UserName')
    state.username = payload
  }
}

const actions = {
  getFleetBoard ({commit}) {
    https.get('/')
      .then(({ data }) => {
        console.log('uyeyeyeye')
        console.log(data)
        commit('setFleetBoard', data)
        // this.saveToFireBase(data)
      })
      .catch(err => {
        console.log('lalalallalala')
        console.error(err)
      })
  },  
  saveToFireBase (state) {
    this.$dbs.ref('/battleship').push({
      username: state.username,
      fleetBoard: state.fleetBoard
    })
  }
}

const store = new Vuex.Store({
  state, mutations, actions
})

export default store
