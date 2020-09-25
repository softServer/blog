import api from '../request'
import urls from './urls'

// const header = {}

export default {
  getAllCategory () {
    // return出去了一个promise
    return api.get(urls.allCategory)
  },
  getLowLevelCategory (parentId) {
    let data = {
      "parentId": parentId
    }
    return api.post(urls.categoryLevelList, data)
  },
  getArticleList (data) {
    return api.get(urls.articleList, data);
  },
}
