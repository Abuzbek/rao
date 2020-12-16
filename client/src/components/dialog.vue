<template>
  <div class="dialog py-15">
    <div class="overlay" @click="$emit('dialogFalse', false)">
      <v-btn icon dark @click="$emit('dialogFalse', false)">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-card
      min-height="auto"
      max-height="90%"
      class="dialog_fullscreen rounded-lg"
    >
      <v-row>
        <v-col class="py-0" cols="12" md="6">
          <img :src="img" alt="" />
        </v-col>
        <v-col class="py-0" cols="12" md="6">
          <v-card-title class="card_title">{{ name }}</v-card-title>
          <v-card-text>
            <div class="category">
              <span class="mr-4">
                Category:
              </span>
              {{ category }}
            </div>
            <ul>
              <li :class="sale ? 'line' : 'textBig'">
                <span class="mr-4">Price</span>
                {{ price }} UZS
              </li>
              <li class="textBig" v-if="sale">
                <span class="mr-4">Sale</span>
                {{ sale }} UZS
              </li>
            </ul>
            <p class="description">
              {{ description }}
            </p>
            <v-btn color="warning" @click="selectCart()">
              В корзину
            </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    dialog: {
      type: Boolean,
    },
    _id: {
      type: String,
      // required:true
    },
    name: {
      type: String,
      // required:true
    },
    img: {
      type: String,
      // required:true,
      default: "https://aseshop.uz/uploads/default/no-image.jpg",
    },
    price: {
      type: String,
      // required:true
    },
    sale: {
      type: String,
    },
    description: {
      type: String,
      // required:true
    },
    category: {
      type: String,
    },
  },
};
</script>
<style lang="scss" scoped>
.dialog{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.dialog_fullscreen {
  position: relative;
  z-index: 11;
  // border-radius: ;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1000px;
}
.overlay {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.3);
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  backdrop-filter: blur(6px);
}
.textBig {
  font-size: 19px;
  font-weight: 500;
}
.line {
  color: gray;
  text-decoration: line-through;
}
.dialog_fullscreen::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 10em;
}
.dialog_fullscreen:hover {
  padding-right: 0px;
}
.dialog_fullscreen::-webkit-scrollbar {
  width: 5px;
}
.dialog_fullscreen:hover::-webkit-scrollbar {
  width: 5px;
}
.dialog_fullscreen::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

p.description {
  word-break: break-all !important;
}
// .imgDialog{
//   width: 100%;
//   height: 100%;
// }
img {
  max-width: 100%;
  height: auto;
}
ul {
  padding-left: 0;
  padding-top: 10px;
  padding-bottom: 10px;
  li {
    list-style: none;
  }
}
.card_title {
  word-break: break-word !important;
}
@media (max-width: 1200px) {
  .dialog_fullscreen {
    max-width: 100%;
    width: 90%;
  }
}
</style>
