<template>
  <section class="complete">
    <div class="top"
    :style="`background: url(${background}) no-repeat center center / cover;`"
    ></div>
    <h1 class="py-12 display-2 text-center">Пакет масок</h1>
    <v-container class="pt-15">
      <h1 v-if="!products.length" class="my-16 display-3 text-center">Tовар еще не добавлен</h1>
      <Dialog v-bind="productPush" v-if="dialog" @dialogFalse="dialogFalse()" />
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
    <Footer/>
  </section>
</template>
<script>
import axios from 'axios'
import Card from '../../components/card'
import Dialog from '../../components/dialog'
import Footer from '../../components/footer'
export default {
  data:()=>({
    dialog: false,
    productPush: null,
    background:'',
    products:[]
  }),
  components:{
    Card,Dialog,Footer
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
  async mounted() {
    await axios
      .get("http://localhost:3000/api")
      .then((res) => res.data)
      .then((card) => {
        console.log(card);
          this.products = card.filter((n,i)=> {
          console.log(i)
          return n.category === 'Пакет масок' && n.gender === 'man' ;
        });
      });
      axios
        .get('http://localhost:3000/api/back/tony_mask') 
        .then((res) => res.data)
        .then((post) => {
          console.log(post);
          post.map(n => this.background = n.img);
        }); 
  }
}
</script>
<style lang="scss" scoped>
.complete{
  .top{
    height: 400px;
    width: 100%;
  }
}
</style>