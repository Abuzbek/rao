<template>
  <div class="checkout pt-16">
    <v-container>
      <h1 class="display-2 mb-5">Корзина</h1>
      <div v-for="n in products" :key="n._id">
        <checkout-cart v-bind="n"/>
      </div>
      <h1 v-if="!products.length" class="my-16">Добавьте что-нибудь из меню</h1>
      <!-- <h1 class="display-2 mt-5">Сумма заказа:  {{productsOverallPrice}} USD</h1> -->
    </v-container>
  </div>
</template>

<script>
import checkoutCart from '../components/checkoutCart'
export default {
  data:()=>({
    products:null,
    allPrice:'',
  }),
  components:{
    checkoutCart:checkoutCart
  },
  mounted (){
    this.$store.dispatch('setProduct')
    this.products = this.getProduct
  },
   computed: {
    getProduct(){
      return this.$store.getters.getProducts
    },
  },
  // watch:{
  //   productAllPrice(){
  //     return this.products.reduce(function (accumulator, currentValue) {
  //       if(currentValue.price){
  //         return accumulator + currentValue.price
  //       }
  //       else{
  //         return accumulator + currentValue.sale
  //       }
  //     }, 0);
  //   }
  // }
}
</script>
