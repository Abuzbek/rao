import axios from 'axios'
export default {
  actions: {
    fetchCard ({ commit }) {
      axios
        .get('http://localhost:3000/api')
        .then(res => res.data)
        .then(card => {
          console.log(card)
          commit('card', card)
        })
    }
  },
  mutations: {
    card (state, posts) {
      state.card = posts
    }
  },
  state: {
    card: null
  },
  getters: {
    card (state) {
      return state.card
    }
  }
}