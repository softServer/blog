// 数据存储交互
import Vue from 'vue'
import Vuex from 'vuex'
import artcles from './modules/artcles'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
    ],
  },
  getters: {
    categories: state => {
      const categories = []

      for (const article of state.articles) {
        if (
          !article.category ||
          categories.find(category => category.text === article.category)
        ) continue

        const text = article.category

        categories.push({
          text,
          href: '#!',
        })
      }

      return categories.sort().slice(0, 4)
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
    initItems: (state, categoryList) => {
      state.items = categoryList
      state.category = categoryList[0]
    },
    activeCategory: (state, activeCategory) => (state.category = activeCategory),
  },
  actions: {

  },
  modules: {
    artcles
  }
})
