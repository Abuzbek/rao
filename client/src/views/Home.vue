<template>
  <div>
    <header>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          v-for="n in banners"
          :key="n.img"
          :style="``"
          class="swiperSlide d-flex justify-center align-center"
        >
          <img :src="n.img" alt="">
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination swiperPag" slot="pagination"></div>
    </header>
    <v-container class="pt-15">
      <h1 class="text-center">BEST SELLER</h1>
      <v-row class="justify-center">
        <v-col
          v-for="n in products"
          :key="n._id"
          cols="12"
          sm="6"
          xl="2"
          lg="3"
          md="4"
        >
          <Card v-bind="n" @cartId="selectId" />
        </v-col>
      </v-row>
    </v-container>
    <Special />
    <v-container class="pt-15">
      <h1 class="text-center">NEW ARRIVAL</h1>
      <v-row class="justify-center">
        <v-col
          v-for="n in productsNew"
          :key="n._id"
          cols="12"
          sm="6"
          xl="2"
          lg="3"
          md="4"
        >
          <Card v-bind="n" @cartId="selectId" />
        </v-col>
      </v-row>
    </v-container>
    <!-- <SuperSale :superSale="superSale"/> -->
    <Instagram />
    <About/>
    <Footer/>
  </div>
</template>
<script>
import axios from "axios";
import Card from "../components/card";
import Special from "../components/special.vue";
import Instagram from "../components/instagram.vue";
import About from "../components/aboutContact.vue";
import Footer from "../components/footer.vue";
// import SuperSale from "../components/superSale.vue";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination, EffectFade, Autoplay]);
export default {
  data() {
    return {
      banners: [],
      swiperOptions: {
        loop: true,
        effect: "fade",
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // Some Swiper option/callback...
      },
      dialog: false,
      products: [],
      productsNew:[],
      productId: '',
      clickedId: false,
      superSale:[]
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Special,
    Card,
    Footer,
    About,
    Instagram,
  },
  directives: {
    swiper: directive,
  },
  async mounted() {
    await axios
      .get("http://localhost:3000/api")
      .then((res) => res.data)
      .then((card) => {
        console.log(card);
        this.products = card.filter((n,i)=> {
          console.log(i)
          return n.new !== 'on';
        });
      });
    await axios 
      .get('http://localhost:3000/api/carousel')
      .then((res) => res.data)
      .then((card) => {
        console.log(card);
        this.banners = card
      });
    await axios
      .get("http://localhost:3000/api")
      .then((res) => res.data)
      .then((card) => {
        console.log(card);
        this.productsNew = card.filter((n,i)=>{
          console.log(i)
          return n.new === 'on';
        });
      });
    await axios
      .get("http://localhost:3000/api")
      .then((res) => res.data)
      .then((card) => {
        console.log(card);
        this.superSale = card.filter(n => {
          if(100-(Math.floor(n.sale/(n.price/100))) >= 50 ){
            return true;
          }
        })
      });  
  },
  methods: {
    selectId(select) {
      console.log(select);
      this.$router.push(`/product/${select._id}`)
    },
  },
};
</script>

<style lang="scss">
.swiperSlide {
  width: 100%;
  height: auto;
  padding-top: 64px;
  h1 {
    font-size: 650px;
    line-height: 700px;
    opacity: 0.5;
    font-weight: 900;
  }
}

header {
  position: relative;
  padding-bottom: 60px;
  .swiperPag {
    position: absolute;
    bottom: 10px;
    width: 100%;
    z-index: 1 !important;
    .swiper-pagination-bullet {
      margin: 0px 5px;
      width: 10px;
      height: 10px;
      background-color: transparent;
      border: 2px solid #a5a5a5;
      border-radius: 6px;
      outline: 1px solid transparent;
      cursor: pointer;
      -webkit-transition: 0.3s ease-in-out;
      transition: 0.3s ease-in-out;
      opacity: 1 !important;
      &-active {
        border: 2px solid #000;
        cursor: pointer;
        -webkit-transition: 0.3s ease-in-out;
        transition: 0.3s ease-in-out;
      }
    }
  }
}
img{
  max-width: 100%;
  height: auto;
}
</style>
