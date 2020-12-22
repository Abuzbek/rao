<template>
  <div class="mt-16">
    <Count @dialogCounter="counter" v-if="counterDialog" v-bind="productPush" />
    <v-container>
      <v-row>
        <v-col cols="12" lg="10" class="ma-auto">
          <v-row>
            <v-col cols="12" md="6">
              <img :src="id.img" alt="">
            </v-col>
            <v-col cols="12" md="6">
              <h2 class="display-3">{{id.name}}</h2>
              <div class="my-5 category">
                Category : {{id.category}}
              </div>
              <v-row class="flex-column ma-0 mt-5 mb-4">
                <div class="lineText">Цена : <span :class="id.sale ? 'line' : 'textBig'">
                  {{ id.price }} </span>сўм</div>
                <div class="textBig" v-if="id.sale"> Скидка : {{ id.sale }} сўм</div>
              </v-row>
              <p class="my-5" v-html="id.description"></p>
               <v-btn color="warning" @click.once="addCart">
              В корзину +1
            </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
import Count from "../../components/count";
export default {
  name:'productId',
  data:()=>({
    id:{},
    productPush: null,
    counterDialog: false,
  }),
  components: {
    Count,
  },
  computed:{
    getParams(){
      return this.$route.params.id
    }
  },
  async mounted(){
    await axios
      .get(`http://localhost:3000/api/product/${this.getParams}`)
      .then((res) => res.data)
      .then((id) => {
        console.log(id);
        this.id = id
      });
       
  },
  methods:{
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
  }
}
</script>
<style lang="scss" scoped>
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
.lineText{
  color: gray;
  font-size: 25px;
}
.category{
  font-size: 20px;
}
</style>