<!-- slot 插槽 ： 标签中间的内容会拿来替换<slot>标签 </slot> -->
<template>
  <section id="feed">
    <feed>
      <slot />
    </feed>
  </section>
</template>

<script>
  export default {
    name: 'HomeAbout',

    components: {
      Feed: () => import('@/components/Feed'),
    },
    created () {
      console.log("artcles")
    }
  }
</script>
