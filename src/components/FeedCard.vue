<!-- base-card 怀疑是 v-card的一个具有基础工能的card组件 -->
<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
  >
    <base-card
      :height="value.prominent ? 450 : 350"
      color="grey lighten-1"
      dark
      href="#!"
    >
    <!-- :src="require(`@/assets/articles/${value.hero}`)" -->
      <v-img
        :src="value.articleBanner"
        height="100%"
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
        <v-row
          v-if="!value.prominent"
          class="fill-height text-right ma-0"
        >
          <v-col cols="12">
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="grey darken-3"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.categoryNameTree }}
            </v-chip>

            <h3 class="title font-weight-bold mb-2">
              {{ value.articleName }}
            </h3>

            <div class="caption">
              {{ value.userId }}<br>Date
            </div>
          </v-col>

          <v-col align-self="end">
            <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop=""
            >
              Read More
            </v-chip>
          </v-col>
        </v-row>
      </v-img>
    </base-card>
  </v-col>
</template>

<!-- todo：深入理解vue组件和模板 -->
<script>
  export default {
    name: 'FeedCard',

    props: {
      size: {
        type: Number,
        required: true,
      },
      value: {
        type: Object,
        default: () => ({}),
      },
    },
  }
</script>

<style>
.v-image__image {
  transition: .3s linear;
}
</style>
