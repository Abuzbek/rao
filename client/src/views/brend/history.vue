<template>
  <div>
    <header>
      <img
        src="https://logyka.net/assets/templates/img/1455/SEOLogyka.jpg"
        alt=""
      />
    </header>
    <section>
      <v-container>
        <h1 class="display-4 text-center font-weight-bold">RAON</h1>
        <div class="d-flex justify-center align-center my-7">
          <v-btn color="white" large>
          RAON бренди
        </v-btn>
        <v-btn color="black" dark large>
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
<Footer/>
  </div>
</template>
<script>
import Footer from '../../components/footer'
import img from "../../assets/RAON.jpg";
export default {
  data: () => ({
    img,
  }),
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
</style>
