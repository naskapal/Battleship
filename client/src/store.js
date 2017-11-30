import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

// const http = axios.create({
//   baseURL: 'https://us-central1-test-project-186802.cloudfunctions.net/ship-initializer'
// })

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
    this.$https.get('/')
      .then(({ data }) => {
        console.log('uyeyeyeye')
        console.log(data)
        commit('setFleetBoard', data)
      })
      .catch(err => {
        console.log('lalalallalala')
        console.error(err)
      })
  }
}

const store = new Vuex.Store({
  state, mutations, actions
})

export default store
