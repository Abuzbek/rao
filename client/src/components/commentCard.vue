<template>
  <v-card class="mx-auto my-5" max-width="100%" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="80" color="grey" v-if="img">
        <img :src="img" alt="" />
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ commentary }}
        </v-list-item-subtitle>
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
    commentary: String,
    _id:String
  },
};
</script>
<style lang="scss" scoped></style>
