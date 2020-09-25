<!-- 栅格系统
* v-container 提供了居中和水平填充网站内容的功能
* v-row 是 v-col 的包装组件。
* v-col 是内容所有者，必须是 v-row 的直接子集。
 -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>

      <feed-card
        v-for="(article, i) in articles"
        :key="article.title"
        :size="layout[i]"
        :value="article"
      />
    </v-row>

    <v-row align="center">
      <v-col cols="3">
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          square
          title="Previous page"
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-col>

      <v-col
        class="text-center subheading"
        cols="6"
      >
        PAGE {{ page }} OF {{ pages }}
      </v-col>

      <v-col
        class="text-right"
        cols="3"
      >
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          square
          title="Next page"
          @click="page++"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </base-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  // Utilities
  import {
    mapState,
    mapGetters,
  } from 'vuex'

  import productApi from '@/api/product'

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('@/components/FeedCard'),
    },

    data: () => ({
      page: 1,
      articles: []
    }),
    created() {
      intitArticles()
    },
    // 计算属性 
    computed: {
      // mapState通过扩展运算符将store.state.orderList 映射this.orderList
      //...mapState(['activeCategory']),
      ...mapGetters(['category']),
    },
    methods: {
      intitArticles () {
        let data = {
          "categoryId": this.category.id,
          "pageNum": page,
          "pageSize": 10
        }
        productApi.getArticleList(data).than(res => {
          console.log("articleList:", res)
          this.articles = res.list
        })
      }
    },
    watch: {
      page () {
        window.scrollTo(0, 0)
      },
      category () {
        // 清理page
        // 重新请求articles
      }
    },
    methods: {
        // 查询文章列表
        getArticleList(categoryId, pageNum) {

        }
    },
  }
</script>
