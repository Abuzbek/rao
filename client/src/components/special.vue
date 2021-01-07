<template>
  <div class="special_parent">
    <v-container class="py-0">
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <div class="text_v" v-ripple>
            R
          </div>
        </v-col>
        <v-col cols="12" md="6" lg="6" class="py-0 ma-auto">
          <v-card @click="$router.push('/product/'+productfirst._id)" class="text-center cardHover" elevation="0" max-width="100%">
            <v-row>
              <v-col cols="12" sm="6" class="pa-0 pl-3">
                <v-hover v-slot="{ hover }">
                  <v-img
                    :src="productfirst.img"
                    height="auto"
                    v-ripple
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex justify-center align-center transition-fast-in-fast-out overlay v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        +
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-hover>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                class="py-6 d-flex justify-center align-center flex-column"
              >
                <v-card-title class="justify-center">
                  {{productfirst.name}}
                </v-card-title>
                <v-card-subtitle>
                  {{productfirst.category}}
                </v-card-subtitle>
                <div class="textBig" v-if="productfirst.sale">
                  {{productfirst.sale}}
                </div>
                <div class="textBig" v-else>
                  {{productfirst.price}}
                </div>
                <v-card-actions class="d-flex justify-center align-center">
                  <v-btn
                    width="188px"
                    height="33px"
                    color="#ffd66b"
                    class="cardBtn"
                  >
                    В корзину
                  </v-btn>
                </v-card-actions>
              </v-col>
            </v-row>
          </v-card>
          <v-card @click="$router.push('/product/'+productsecond._id)" elevation="0" class="text-center cardHover" max-width="100%">
            <v-row>
              <v-col
                cols="12"
                sm="6"
                class="py-6 d-flex justify-center align-center flex-column"
              >
                <v-card-title class="justify-center ">
                  {{productsecond.name}}
                </v-card-title>
                <v-card-subtitle>
                  {{productsecond.category}}
                </v-card-subtitle>
               <div class="textBig" v-if="productsecond.sale">
                  {{productsecond.sale}}
                </div>
                <div class="textBig" v-else>
                  {{productsecond.price}}
                </div>
                <v-card-actions class="d-flex justify-center align-center">
                  <v-btn
                    width="188px"
                    height="33px"
                    color="#ffd66b"
                    class="cardBtn"
                  >
                    В корзину
                  </v-btn>
                </v-card-actions>
              </v-col>
              <v-col cols="12" sm="6" class="pa-0 pr-3">
                <v-hover v-slot="{ hover }">
                  <v-img
                    :src="productsecond.img"
                    height="auto"
                    v-ripple
                  >
                    <v-expand-transition>
                      <div
                        v-if="hover"
                        class="d-flex justify-center align-center transition-fast-in-fast-out overlay v-card--reveal display-3 white--text"
                        style="height: 100%;"
                      >
                        +
                      </div>
                    </v-expand-transition>
                  </v-img>
                </v-hover>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data:()=>({
    productfirst:'',
    productsecond:'',
    products:[]
  }),
  mounted(){
    axios
      .get('http://localhost:3000/api/limit')
      .then(res => res.data)
      .then(product => {
        this.products = product.filter((n,i)=> {
          console.log(i)
          return n.special === 'on';
        });
        this.productfirst = this.products[0]
        this.productsecond = this.products[1]
        console.log(this.productfirst);
      })
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap");
.special_parent {
  background: url("https://cutewallpaper.org/21/llight-color-background-wallpaper/Light-Abstract-Wallpapers-Hd-Light-Blue-Color-Background-.jpg");
}
.textBig {
  font-size: 19px;
  font-weight: 500;
}
.line {
  color: gray;
  text-decoration: line-through;
}
.cardBtn {
  color: #f4f4f4;
}
.overlay {
  background: rgba(255, 156, 114, 0.7);
}
.text_v {
  font-family: "Merriweather", serif;
  font-size: 600px;
  font-weight: 900;
  line-height: 488px;
  background: url("https://img2.goodfon.ru/wallpaper/nbig/4/45/devushka-model-volosy-2273.jpg");
  background-position: -185px -10px;
  cursor: default;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
@media (max-width:959px) {
  .text_v{
    display: none;
  }
  
}
</style>
