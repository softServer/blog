// 数据存储交互
import Vue from 'vue'
import Vuex from 'vuex'
import artcles from './modules/artcles'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    categories: [
    ],
    category: {

    },
  },
  getters: {
    getCategories: state => {
      return state.categories;
    },
    links: (state, getters) => {
      return state.items
    },
    category: (state, getters) => {
      return state.items[0]
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    initCategories: (state, categoryList) => {
      state.categories = categoryList
      state.category = categoryList[0]
    },
    activeCategory: (state, activeCategory) => (state.category = activeCategory),
  },
  actions: {

  },
  // modules: {
  //   artcles
  // }
})
