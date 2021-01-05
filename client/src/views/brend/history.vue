<template>
  <div>
    <header>
      <img
        :src="background"
        alt=""
      />
    </header>
    <section>
      <v-container>
        <h1 class="display-4 text-center font-weight-bold">RAON</h1>
        <div class="d-flex justify-center align-center my-7">
          <v-btn
            color="white"
            style="border-radius:0px !important;outline:1px solid black;outline-offset:-4px;"
            large
            @click="$router.push('/brend')"
          >
            RAON бренди
          </v-btn>
          <v-btn color="black"  style="border-radius:0px !important;outline:1px solid white;outline-offset:-4px;" dark large>
            RAON история
          </v-btn>
        </div>
        <v-row>
          <v-col cols="12" md="10" lg="10" class="ma-auto">
            <img :src="img" alt="" />
          </v-col>
        </v-row>
      </v-container>
    </section>
    <Footer />
  </div>
</template>
<script>
import Footer from "../../components/footer";
import img from "../../assets/RAON.jpg";
import axios from 'axios'
export default {
  data: () => ({
    img,
    background:'',
  }),
  components: {
    Footer,
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/back/raon_history')
      .then((res) => res.data)
      .then((post) => {
        console.log(post);
        post.map(n => this.background = n.img);
      }); 
  },
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}
</style>
