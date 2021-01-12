<template>
  <div class="checkout pt-16">
    <v-container>
      <h1 class="display-2 mb-5">Корзина</h1>
      <div v-for="n in products" :key="n._id" >
        <checkout-cart v-bind="n" @delete-item="deleteItem"/>
      </div>
      <h1 v-if="!products.length" class="my-16">Добавьте что-нибудь из меню</h1>
      <h1 class="display-2 mt-5">Сумма заказа:  {{productAllPrice}} USD</h1>
      <div class="d-flex justify-center align-center mt-5">
        <v-btn
          rounded
          large
          color="#ffd66b"
          @click="formDialog = true"
          v-if="products.length"
        >
          Оформить заказ
        </v-btn>
      </div>
    </v-container>
    <FormDialog v-if="formDialog" @form-send="sendForm" @form-false="selectForm"/>
  
  <Footer/>
  </div>
</template>

<script>
import checkoutCart from '../components/checkoutCart'
import FormDialog from '../components/form'
import axios from 'axios'
import Footer from '../components/footer'
export default {
  data:()=>({
    products:[],
    formDialog:false,
    allPrice:'',
  }),
  components:{
    checkoutCart:checkoutCart,
    FormDialog,Footer
  },
  mounted (){
    this.$store.dispatch('setProduct')
    this.products = this.getProduct
  },
  computed: {
    getProduct(){
      return this.$store.getters.getProducts
    },
    productAllPrice(){
      return this.products.reduce(function (accumulator, currentValue) {
        if(currentValue.sale){
          return accumulator + currentValue.sale
        }
        else{
          return accumulator + currentValue.price
        }
      }, 0);
    }
  },
  methods:{
    selectForm(select){
      this.formDialog = select
    },
    deleteItem(id){
      this.products = this.products.filter(i =>{
        if(i._id !== id){
          return true;
        }
      })
      if(!this.products.length){
        this.$router.push('/')
        window.location.reload()
      }
    },
    sendForm(send){
      this.formDialog = send.trueFalse
      send.product = this.products
      send.allPrice = this.productAllPrice
      setTimeout(()=>{
        axios.post('http://korearaon.uz/admin/user_chechout', send)
      },100)
    }
  }
}
</script>
