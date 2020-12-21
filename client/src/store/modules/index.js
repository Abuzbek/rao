export default {
  state:{
    product: [],
  },
  mutations: {
    setProduct(state, payload) {
      state.product.push(payload)
    },
    deleteProduct(state){
      state.product = state.product.filter(i=>{
        if(i == undefined){
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
