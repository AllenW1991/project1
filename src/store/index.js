import { createStore } from 'vuex'

export default createStore({
  state: { activatedModal: '' },
  getters: {},
  mutations: {
    CHANGE_MODAL(state, data) {
      state.activatedModal = data
    },
  },
})
