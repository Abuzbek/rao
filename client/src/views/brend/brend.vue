<template>
  <div>
    <header>
      <img
        :src="background"
        alt=""
      />
    </header>
    <v-container>
      <h2 class="display-4 text-center font-weight-bold">RAON</h2>
        <div class="d-flex justify-center align-center my-7">
          <v-btn
            color="black"
            style="border-radius:0px !important;outline:1px solid white;outline-offset:-4px;"
            large
            dark
          >
            RAON бренди
          </v-btn>
          <v-btn color="white" style="border-radius:0px !important;outline:1px solid black;outline-offset:-4px;" @click="$router.push('/history')"  large>
            RAON история
          </v-btn>
        </div>
    </v-container>
    <section>
      <h1>
        RAON
      </h1>
    </section>
    <Footer/>
  </div>
</template>
<script>
import Footer from '../../components/footer'
import img from "../../assets/RAON.jpg";
import axios from 'axios'
export default {
  data: () => ({
    img,
    background:''
  }),
  mounted() {
    axios
      .get('http://localhost:3000/api/back/raon_brend')
      .then((res) => res.data)
      .then((post) => {
        console.log(post);
        post.map(n => this.background = n.img);
      }); 
  },
  components:{
    Footer
  }
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}
h1 {
  font-family: "Merriweather", serif;
  font-size: 400px;
  font-weight: 900;
  line-height: 488px;
  background: url("https://prettyzone.net/image/cache/catalog/promotion/pretty-zone-1-1920x600.jpg");
  background-position: -185px -10px;
  cursor: default;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
</style>
