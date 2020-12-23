<template>
  <div class="mt-16">
    <Count @dialogCounter="counter" v-if="counterDialog" v-bind="productPush" />
    <v-container>
      <v-row>
        <v-col cols="12" lg="10" class="ma-auto">
          <v-row>
            <v-col cols="12" md="6">
              <div class="img_wrapper">
                <img :src="id.img" alt="" />
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <h2 class="display-3">{{ id.name }}</h2>
              <div class="my-5 category">Категория : {{ id.category }}</div>
              <v-row class="flex-column ma-0 mt-5 mb-4">
                <div class="lineText">
                  Цена :
                  <span :class="id.sale ? 'line' : 'textBig'">
                    {{ id.price }} </span
                  >сўм
                </div>
                <div class="textBig" v-if="id.sale">
                  Скидка : {{ id.sale }} сўм
                </div>
              </v-row>
              <p class="my-5" v-html="id.description"></p>
              <hr />
              <ul class="table">
                <li>
                  <span>
                    Стоимость доставки :
                  </span>
                  3000 сумов (бесплатно при покупке свыше 70000 сумов)
                </li>
                <li>
                  <span>
                    Потребительские цены :
                  </span>
                  <p :class="id.sale ? 'lineBottom' : 'textBigBottom'">
                    {{ id.price }} сўм
                  </p>
                </li>
                <li v-if="id.sale" class="price">
                  <span>
                    ЦЕНА :
                  </span>
                  {{ id.sale }} сўм
                </li>
              </ul>
              <v-btn color="warning" large block @click.once="addCart">
                В корзину +1
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <h1 class="display-2 font-weight-bold text-center">
        Информация о продукте
      </h1>
    </v-container>
    <Footer />
  </div>
</template>
<script>
import axios from "axios";
import Count from "../../components/count";
import Footer from "../../components/footer";

export default {
  name: "productId",
  data: () => ({
    id: {},
    productPush: null,
    counterDialog: false,
  }),
  components: {
    Count,
    Footer,
  },
  computed: {
    getParams() {
      return this.$route.params.id;
    },
  },
  async mounted() {
    await axios
      .get(`http://localhost:3000/api/product/${this.getParams}`)
      .then((res) => res.data)
      .then((id) => {
        console.log(id);
        this.id = id;
      });
  },
  methods: {
    addCart() {
      this.counterDialog = true;
      this.productPush = {
        _id: this.id._id,
        name: this.id.name,
        img: this.id.img,
        price: this.id.price,
        sale: this.id.sale,
        category: this.id.category,
      };
    },
    counter(counter) {
      this.counterDialog = counter;
      this.$emit("dialogFalse", false);
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  list-style: none;
  text-decoration: none;
}
.textBig {
  font-size: 30px;
  font-weight: 500;
}
.line {
  color: gray;
  text-decoration: line-through;
  font-size: 25px;
  margin-right: 15px;
}
.lineText {
  color: gray;
  font-size: 25px;
}
.category {
  font-size: 20px;
}
.img_wrapper {
  max-width: 600px;
  img {
    max-width: 100%;
    height: auto;
  }
}
hr{
  margin: 25px 0;
}
.table {
  padding-left: 0px ;
  margin-bottom: 50px;
  li {
    padding: 8px 0 8px 7px;
    &.price {
      color: red;
      font-size: 20px;
    }
    .lineBottom {
      color: gray;
      text-decoration: line-through;
      font-size: 16px;
      display: inline-block;
      margin-bottom: 0px;
    }
    span {
      margin-right: 10px;
      font-size: 16px;
    }
  }
}
</style>
