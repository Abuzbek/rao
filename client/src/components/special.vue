<template>
  <div class="special_parent">
    <v-container class="py-0">
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <div class="text_v" v-ripple>
            R
          </div>
        </v-col>
        <v-col cols="12" md="6" class="py-0">
          <v-card class="text-center cardHover" elevation="0" max-width="100%">
            <v-row>
              <v-col cols="12" sm="6" class="pa-0 pl-3">
                <v-hover v-slot="{ hover }">
                  <v-img
                    src="https://i.ibb.co/8mwVm23/Lacafone-Tea-Tree-Poduim.jpg"
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
                  Top western road trips
                </v-card-title>
                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>
                <div class="textBig">
                  1350 сўм
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
          <v-card elevation="0" class="text-center cardHover" max-width="100%">
            <v-row>
              <v-col
                cols="12"
                sm="6"
                class="py-6 d-flex justify-center align-center flex-column"
              >
                <v-card-title class="justify-center ">
                  Top western road trips
                </v-card-title>
                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>
                <div class="textBig">
                  1350 сўм
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
                    src="https://i.ibb.co/8mwVm23/Lacafone-Tea-Tree-Poduim.jpg"
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
export default {};
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
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
