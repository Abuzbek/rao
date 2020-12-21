<template>
  <div class="dialog py-15">
    <div class="overlay"></div>
    <v-card
      min-height="auto"
      max-height="90%"
      class="dialog_fullscreen rounded-lg"
    >
      <h3 class="display-2">Cколько тебе надо ?</h3>
      <v-text-field v-model="count" label="Name" required></v-text-field>
      <v-btn rounded block color="#ffd66b"  @click="sendForm">
        send
      </v-btn>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "Count",
  data: () => ({
    count: 1,
  }),
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
    },
    img: {
      type: String,
      default: "https://aseshop.uz/uploads/default/no-image.jpg",
    },
    price: {
      type: Number,
    },
    sale: {
      type: Number,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
  },
  methods: {
    sendForm() {
      this.$store.dispatch("setProduct", {
        _id: this._id,
        name: this.name,
        img: this.img,
        price: this.price * Number(this.count),
        sale: this.sale * Number(this.count),
        category: this.category,
        count: Number(this.count),
      });
      this.$emit("dialogCounter", false);
    },
  },
  mounted(){
    window.addEventListener("keydown",(e)=>{
      if(e.keyCode === 13){
        this.$store.dispatch("setProduct", {
          _id: this._id,
          name: this.name,
          img: this.img,
          price: this.price * Number(this.count),
          sale: this.sale * Number(this.count),
          category: this.category,
          count: Number(this.count),
        });
        this.$emit("dialogCounter", false);
      }
    })
  }
};
</script>
<style lang="scss" scoped>
.dialog {
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
  z-index: 1100;
}
.dialog_fullscreen {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1110;
  // border-radius: ;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1000px;
  min-width: 320px;
  padding: 20px 30px;
}
.overlay {
  position: fixed;
  z-index: 1101;
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
</style>
