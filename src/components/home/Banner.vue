<template>
  <base-card dark>
    <v-img
      :src="require('@/assets/articles/fighting.jpg')"
      class="grey lighten-2"
      height="400"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
          @click="showNum"
        >
          <h1 class="display-3 font-weight-light">
            Only Fight
          </h1>

          <div class="subheading text-uppercase pl-2 mb-4">
           只有奋力一战，fighting
          </div>

          <v-btn
            color="primary"
            depressed
            @click.stop="showNum"
          >
          app下载
          </v-btn>
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<script>
  export default {
    name: 'HomeBanner',
    methods: {
      showNum () {
        console.log("banner")
      }
    },
    created () {
      this.showNum ()
    },
  }
</script>
