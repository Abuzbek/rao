<template>
  <v-card v-ripple elevation="4" shaped>
    <v-hover v-slot="{ hover }">
      <v-img :src="img">
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex justify-center flex-column align-center transition-fast-in-fast-out overlay v-card--reveal"
            style="height: 100%;"
          >
            <h2>{{ text }}</h2>
            <h1>{{ title }}</h1>
          </div>
        </v-expand-transition>
      </v-img>
    </v-hover>
  </v-card>
</template>
<script>
export default {
  props:{
    img:String,
    title:String,
    text:String
  }
};
</script>
<style lang="scss" scoped></style>
