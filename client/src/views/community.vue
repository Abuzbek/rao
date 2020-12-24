<template>
  <div class="community">
    <header/>
    <v-container>
      <v-row>
        <v-col cols="12" sm="10" md="10" class="ma-auto" v-for="(n, i) in post" :key="i">
          <v-card>
            <img :src="n.img" alt="" v-ripple />
            <v-card-title>
              {{ n.name }}
            </v-card-title>
            <v-card-text v-html="n.description"> </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    post: [],
  }),
  mounted() {
    axios
      .get("http://localhost:3000/post/api")
      .then((res) => res.data)
      .then((post) => {
        console.log(post);
        this.post = post;
      });
  },
};
</script>
<style lang="scss" scoped>
.community {
  header {
    background: url("https://mmm.dk/image/crop/3130741/1920/1000.jpg") no-repeat
      center center / cover;
    height: calc(600px - 65px);
    margin-top: 65px;
    padding-bottom: 0;
  }
}
</style>
