<template>
  <section class="complete">
    <div class="top"
    :style="`background: url(${background}) no-repeat center center / cover;`"
    ></div>
    <h1 class="py-12 display-2 text-center">Полноценный уход за кожей</h1>
    <v-container class="pt-15">
      <h1 v-if="!products.length" class="my-16 display-3 text-center">
        Tовар еще не добавлен
      </h1>
      <Dialog v-bind="productPush" v-if="dialog" @dialogFalse="dialogFalse()" />

      <paginate name="products" :list="products" :per="12" class="paginate-list">
        <v-row class="justify-center">
          <v-col
            cols="12"
            sm="6"
            xl="2"
            lg="3"
            md="4"
            v-for="(item, n) in paginated('products')"
            :key="n"
          >
            <Card v-bind="item" @cartId="selectId" />
          </v-col>
        </v-row>
      </paginate>
      <paginate-links
        for="products"
        :limit="2"
        :show-step-links="true"
        class="pagination_item"
      ></paginate-links>
    </v-container>
    <Footer />
  </section>
</template>
<script>
import axios from "axios";
import Card from "../../components/card";
import Dialog from "../../components/dialog";
import Footer from "../../components/footer";
export default {
  data: () => ({
    dialog: false,
    productPush: null,
    products: [],
    background:'',
    paginate: ["products"],
  }),
  components: {
    Card,
    Dialog,
    Footer,
  },
  methods: {
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
  async mounted() {
    await axios
      .get("http://localhost:3000/api")
      .then((res) => res.data)
      .then((card) => {
        console.log(card);
        this.products = card.filter((n) => {
          console.log(n);
          return n.gender === "woman";
        });
      });
      axios
        .get('http://localhost:3000/api/back/women_all')
        .then((res) => res.data)
        .then((post) => {
          console.log(post);
          post.map(n => this.background = n.img);
        }); 
  },
};
</script>
<style lang="scss" scoped>
.complete {
  .top {
    height: 400px;
    width: 100%;
  }
}
</style>
<style lang="scss">
.pagination_item {
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    background: #fff;
    border-radius: 4px;
    font-size: 1rem;
    height: 34px;
    margin: 0.3rem;
    min-width: 34px;
    padding: 0 5px;
    text-decoration: none;
    transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
    width: auto;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: rgba(0, 0, 0, 0.87);
    }
  }
  li.active {
    color: #fff;
    background-color: #1867c0 !important;
    border-color: #1867c0 !important;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    font-size: 1rem;
    height: 34px;
    margin: 0.3rem;
    min-width: 34px;
    padding: 0 5px;
    text-decoration: none;
    transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
    width: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: white;
    }
  }
}
#labelFile {
  background: rgba(0, 0, 0, 0.06);
  display: inline-block;
  width: 100%;
  min-height: 56px;
  padding: 0 12px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  cursor: pointer;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  span {
    margin-left: 9px;
    color: rgba(0, 0, 0, 0.6);
  }
}
#inputImage {
  display: none;
}
</style>

