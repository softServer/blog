<!-- cat是call to action 的缩写，中文通常称之为“行为召唤”。
    通过设计引导甚至诱导用户执行的特定操作，
    例如通过点击留下联系方式，进行购买等都是行为召唤。 
-->
<template>
  <v-btn
    :style="styles"
    color="secondary"
    fab
    fixed
    href="https://store.vuetifyjs.com/product/blog-theme-free"
    rel="noopener"
    right
    target="_blank"
    top
  >
    <v-icon>
      <!-- v-icon https://cdn.materialdesignicons.com/4.9.95/ -->
      mdi-vpn mdi-spin
    </v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'CoreCta',

    computed: {
      styles () {
        return {
          marginTop: `${this.$vuetify.application.top}px`,
        }
      },
    },
  }
</script>
