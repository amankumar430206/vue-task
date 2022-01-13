import { createStore } from 'vuex'
import store_auth from "./modules/auth";
import store_blogs from "./modules/blogs";

export default createStore({
  state: {

  },
  mutations: {
  },
  actions: {
  },
  modules: {
    store_auth,
    store_blogs
  }
})
