import Vue from 'vue'
import Vuex from 'vuex'
import main from './main'
import school from './school'
import district from './district'

// Vuex Initialization
Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions, and getters.
// This is empty right now, but later is will manage the state of our app
export default new Vuex.Store({
  modules: {
    main,
    school,
    district
  }
})
