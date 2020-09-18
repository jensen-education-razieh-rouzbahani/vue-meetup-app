import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      { imageUrl: 'https://www.costacruises.se/content/dam/costa/inventory-assets/ports/STO/sto-stoccolma-port-1.jpg.image.750.563.low.jpg',
      id: '1', 
      title: 'Meetup in Stockholm',
      date: new Date(),
      location: 'Stockholm',
      description:'Beautiful city'
    },
      { imageUrl: 'https://www.telegraph.co.uk/content/dam/Travel/2018/May/gothenburg-hall.jpg',
      id: '2', 
      title: 'Meetup in Gothenburg',
      date: new Date(),
      location: 'Gothenburg',
      description:'Nice city'
    }
    ],
    user: null,
    loading: false,
    error: null
  },

  mutations: {
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload){
      state.error = payload
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
  },
  modules: {
  }
})
