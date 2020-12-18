export default {
  state:{
    product: [],
  },
  mutations: {
    setProduct(state, payload) {
      state.product.push(payload)
    },
    deleteProduct(state, payload){
      state.product = state.product.filter(i => i !== undefined)
      state.product = state.product.filter(i=>{
        if(i._id !== payload){
          return true;
        }
      })
    }
  },
  actions: {
    setProduct({ commit }, payload) {
      commit("setProduct", payload);
    },
    deleteProduct({commit}, payload){
      commit('deleteProduct', payload)
    }
  },
  getters: {
    getProducts(state) {
      return [...state.product].filter(i => i !== undefined);
    },
  },
};
