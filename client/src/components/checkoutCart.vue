<template>
  <div class="checkout_cart">
    <img :src="img" alt="jpg" />
    <div class="checkout_body">
      <h3>{{ name }}</h3>
    </div>
    <div class="checkout_icrement">
      <div class="checkout_counter">
        <div class="checkout_count">
          {{ count }}
        </div>
      </div>
      <div class="checkout_price">{{ priceAll }} USD</div>
      <div class="checkout_delete">
        <v-btn icon color="red" @click="deleteItem">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  data: () => ({
    ovrellPrice: null,
  }),
  props: {
    _id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      default: "https://aseshop.uz/uploads/default/no-image.jpg",
    },
    price: {
      type: Number,
      required: true,
    },
    sale: {
      type: Number,
    },
    count: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
    },
  },
  methods: {
    selectCart() {
      this.$emit("cart-id", {
        _id: this._id,
        name: this.name,
        img: this.img,
        price: this.price,
        sale: this.sale,
        description: this.description,
        category: this.category,
        count: this.count,
        ovrellPrice: this.ovrellPrice,
      });
    },
    // icrement() {
    //   this.count = this.count + 1;
    //   if (this.sale) {
    //     this.ovrellPrice = this.count * this.sale;
    //     this.$emit("icrement", {
    //       price: this.ovrellPrice,
    //       count: this.count,
    //     });
    //   } else {
    //     this.ovrellPrice = this.count * this.price;
    //     this.$emit("icrement", {
    //       price: this.ovrellPrice,
    //       count: this.count,
    //     });
    //   }
    // },
    // dicrement() {
    //   this.count = this.count - 1;
    //   if (this.count < 1) {
    //     this.$emit('delete-item' , this._id)
    //   } else {
    //     if (this.sale) {
    //       this.ovrellPrice = this.count * this.sale;
    //       this.$emit("dicrement", {
    //         sale: this.ovrellPrice,
    //         count: this.count,
    //       });
    //     } else {
    //       this.ovrellPrice = this.count * this.price;
    //       this.$emit("dicrement", {
    //         price: this.ovrellPrice,
    //         count: this.count,
    //       });
    //     }
    //   }
    // },
    deleteItem() {
      this.$emit('delete-item' , this._id)
    },
  },
  computed: {
    priceAll() {
      if (this.ovrellPrice) {
        return this.ovrellPrice;
      } else if (this.sale) {
        return this.sale;
      } else {
        return this.price;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.checkout_cart {
  display: flex;
  align-items: center;
  padding: 10px 5px;
  max-width: 700px;
  border-bottom: 1px solid #2a2a2a;
  margin: auto;
  img {
    width: 20%;
  }
  .checkout_body {
    width: 40%;
  }
  .checkout_icrement {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .checkout_counter {
      color: #404040;
      padding: 5px 20px;
      font-size: 20px;
      border-radius: 30px;
      background: #f6f6f6;
      margin-right: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    .checkout_count {
      margin: 0px 6px;
      display: block;
    }
    .dicrement {
      display: block;
      margin: 0px 6px;
      padding: 5px;
    }
    .icrement {
      display: block;
      margin: 0px 6px;
      padding: 5px;
    }
  }
}
</style>
