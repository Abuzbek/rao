<template>
  <v-card
    class="mx-auto"
    :ripple="false"
  >
    <div v-if="sale" class="product_sale">
      SALE
    </div>
    <v-img
      style="cursor:pointer;"
      @click="selectCart()"
      v-ripple="{class: 'warning--text'}"
      class="white--text align-end"
      height="200px"
      :src="img"
    >
    </v-img>
    <v-card-subtitle class="pb-0">
        {{category}}
      </v-card-subtitle>
    <v-card-text style="cursor:pointer;" @click="selectCart()" class="text--primary pb-2">
      <div>{{name}}</div>
    </v-card-text>

    <v-card-actions class="px-4">
      <v-row class="ma-0">
        <v-col class="pt-1 pb-1 px-0"  cols="12" md="6">
          <div :class="sale ? 'line' : 'textBig'">
            {{price}} сўм
          </div>
          <div class="textBig" v-if="sale">
            {{sale}} сўм
          </div>
        </v-col>
        <v-col class="pt-1 pb-1 px-0" cols="12" md="6">
          <v-btn
            color="#fb8c00"
            @click="selectCart()"
          >
            В корзину
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name:"Card",
  data:()=>({
    
  }),
  props:{
    _id:{
      type:String,
      required:true
    },
    name:{
      type:String,
      required:true
    },
    img:{
      type:String,
      required:true,
      default:'https://aseshop.uz/uploads/default/no-image.jpg'
    },
    price:{
      type:String,
      required:true
    },
    sale:{
      type:String,
    },
    description:{
      type:String,
      required:true
    },
    category:{
      type:String,
    },
  },
  methods:{
    selectCart(){
      this.$emit('cartId', 
      {
        _id: this._id,
        name: this.name,
        img:this.img,
        price:this.price,
        sale:this.sale,
        description:this.description,
        category:this.category,
      }
      )
      // console.log(id);
    }
  }
}
</script>
<style lang="scss" scoped>
.textBig{
  font-size:19px;
  font-weight:500;
}
.product_sale{
  position: absolute;
  top:22px;
  right:0;
  z-index: 5;
   height: 40px;
  width: 85px;
  background: #393939;
  color:#fb8c00;
  font-weight: 500;
  transform: rotate(-90deg);
  border-radius: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 50%);
}
.line{
  color: gray;
  text-decoration: line-through;
}
</style>