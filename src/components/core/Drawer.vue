 <!-- 抽屉 -->
<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    temporary
  >
    <v-list>
      <v-list-item
        v-for="(catyegory, i) in categories"
        :key="i"
        :to="catyegory.to"
        :href="catyegory.href"
        @click="onClick($event, catyegory)"
      >
        <v-list-item-title v-text="catyegory.name" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    computed: {
      // 将 store 中的 getter 映射到局部计算属性
      categories() {
        return this.$store.state.categories
      },
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        },
      },
    },

    methods: {
      ...mapMutations(['setDrawer', 'activeCategory']),
      onClick (e, item) {
        e.stopPropagation()
        this.activeCategory(item)
        this.setDrawer(false)
      },
    },
  }
</script>
