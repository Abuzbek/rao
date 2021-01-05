<template>
  <div class="community">
    <header
      :style="`background: url(${background}) no-repeat center center / cover;`"
    />
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
    <Footer/>
  </div>
</template>
<script>
import axios from "axios";
import Footer from "../components/footer";
export default {
  data: () => ({
    post: [],
    background:'',
  }),
  components:{
    Footer
  },
  mounted() {
    axios
      .get("http://localhost:3000/post/api")
      .then((res) => res.data)
      .then((post) => {
        console.log(post);
        this.post = post;
      });
    axios
      .get('http://localhost:3000/api/back/community') 
      .then((res) => res.data)
      .then((post) => {
        console.log(post);
        post.map(n => this.background = n.img);
      }); 
  },
};
</script>
<style lang="scss" scoped>
.community {
  header {
    height: calc(600px - 65px);
    margin-top: 65px;
    padding-bottom: 0;
  }
}
</style>
