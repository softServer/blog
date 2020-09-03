// 属性、插槽、事件和函数参考文档 https://vuetifyjs.com/zh-Hans/components/app-bars/
<template>
  <v-app-bar
    app
    flat
    hide-on-scroll
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        />

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          class="hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>

        <v-spacer />

        <v-text-field
          append-icon="mdi-magnify"
          flat
          hide-details
          solo-inverted
          style="max-width: 300px;"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    computed: {
      // 将 store 中的 getter 映射到局部计算属性
      ...mapGetters(['links']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        /**
         *  $vuetify.goto(target, options)用于控制滚动。
         * target可以是一个数字，表示距离页面顶端的像素距离；
         * 还可以是一个CSS选择器字符串或者一个元素的引用，用来滚动到指定的元素处。
         * options则是一个配置对象，属性有duration表示时间，easing表示缓和曲线效果，offset表示上下偏移量
         */
        //this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
        this.$router.replace(item)
      },
    },
  }
</script>
