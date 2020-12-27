<template>
  <v-card class="mx-auto my-5" max-width="100%" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey" v-if="img">
        <img :src="img" alt="" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-subtitle class="subtitle-1 subtitle_card">
          {{ comment }}
        </v-list-item-subtitle>
        <a :href="'tel:'+phone" class="title mb-1">
          {{ name }}
        </a>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>
<script>
export default {
  data: () => ({}),
  props: {
    img: String,
    name: String,
    comment: String,
    _id:String
  },
};
</script>
<style lang="scss" scoped>
.subtitle_card{
    -webkit-line-clamp: initial !important;
}
a.title{
  color: rgba($color: #000000, $alpha: 0.8);
  text-decoration: none;
}
</style>
