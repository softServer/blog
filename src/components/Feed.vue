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
        :key="article.id"
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
        PAGE {{ page }}
      </v-col>

      <v-col
        class="text-right"
        cols="3"
      >
        <base-btn
          v-if="hasNext"
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
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1,
      articles: [],
      hasNext: false
    }),
    created() {
      this.intitArticles()
    },
    // 计算属性 
    computed: {
      // mapState通过扩展运算符将store.state.orderList 映射this.orderList
      //...mapState(['activeCategory']),
      ...mapState(['category']),
    },
    methods: {
      intitArticles () {
        this.getArticleList()
      },
      
        // 查询文章列表
        getArticleList() {
          let data = {
            "categoryId": this.category.id,
            "pageNum": this.page,
            "pageSize": 10
          }
          productApi.getArticleList(data).then(res => {
            this.articles = res.list
            this.hasNext = res.hasNext
          })
        },
    },
    watch: {
      page () {
        this.getArticleList()
        this.$vuetify.goTo(0)
      },
      category () {
        // 清理page
        this.page = 1
        // 重新请求articles
        this.getArticleList()
      }
    },
    
  }
</script>
