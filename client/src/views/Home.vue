<template>
  <div>
    <header>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide
          v-for="n in banners"
          :key="n.img"
          :style="`background : url(${n.img}) no-repeat center center / cover;`"
          class="swiperSlide d-flex justify-center align-center"
        >
          <h1 style="cursor:default;">{{ n.text }}</h1>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination swiperPag" slot="pagination"></div>
    </header>
    <v-container class="pt-15">
      <Dialog v-bind="productPush" v-if="dialog" @dialogFalse="dialogFalse()" />
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
      <Dialog v-bind="productPush" v-if="dialog" @dialogFalse="dialogFalse()" />
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
    <SuperSale />
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
import Dialog from "../components/dialog";
import Footer from "../components/footer.vue";
import SuperSale from "../components/superSale.vue";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
SwiperCore.use([Pagination, EffectFade, Autoplay]);
export default {
  data() {
    return {
      banners: [
        {
          img:
            "https://cdn.shopify.com/s/files/1/0265/6534/5322/files/slide1.jpg?v=1586335554",
          text: "ALL",
        },
        {
          img: "https://www.ivl.com/Content/Html/MAKANA/images/bg-1.jpg",
          text: "FOR",
        },
        {
          img:
            "https://skincare.7uptheme.net/wp-content/uploads/2019/07/slider18b.jpg",
          text: "YOU",
        },
      ],
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
      products: "",
      productsNew:'',
      productPush: null,
      clickedId: false,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    Special,
    SuperSale,
    Dialog,
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
      .get("http://localhost:3000/api")
      .then((res) => res.data)
      .then((card) => {
        console.log(card);
        this.productsNew = card.filter((n,i)=>{
          console.log(i)
          return n.new === 'on';
        });
      });
  },
  methods: {
    // pushId(id){
    //   if(this.clickedId){
    //     this.$axios.$post('http://localhost:8080/api/product/delete', {id: id})
    //   }
    //   else{
    //     this.$axios.$post('http://localhost:8080/api/product', {id: id})
    //   }
    //   this.clickedId = !this.clickedId
    // }
    selectId(select) {
      console.log(select);
      this.productPush = select;
      this.dialog = !this.dialog;
      document.querySelector("html").style.overflow = "hidden";
    },
    dialogFalse(select) {
      this.dialog = select;
      document.querySelector("html").style.overflow = "auto";
    },
  },
};
</script>

<style lang="scss">
.swiperSlide {
  width: 100%;
  height: 106vh;
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
</style>
