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
      <h1 v-if="id.image" class="display-2 font-weight-bold text-center">
        Информация о продукте
      </h1>
      <v-row v-if="id.image">
        <v-col cols="12" md="8" class="ma-auto">
          <img :src="n.img" v-for="(n, i) in id.image" :key="i" alt="" />
        </v-col>
      </v-row>
      <h1 class="mt-8 display-2 font-weight-bold text-center">
        ОБЗОР
        <!-- <span>
          ⭐️
        </span> -->
      </h1>
      <v-row>
        <v-col cols="12" lg="10" class="mx-auto">
          <v-card class="px-10 py-5">
            <v-row>
              <v-col cols="12" md="12" sm="6">
                <v-textarea
                  filled
                  counter=""
                  :rules="commentaryRules"
                  label="Комментарий"
                  auto-grow
                  v-model="commentary"
                ></v-textarea>
              </v-col>
              <v-col cols="12" md="4" sm="6">
                <input type="file" name="" id="inputImage" />
                <label class="mb-2" for="inputImage" id="labelFile">
                  <v-icon>
                    mdi-camera
                  </v-icon>
                  <span>
                    Изображение
                  </span>
                </label>
                <div class="v-text-field__details">
                  <div class="v-messages theme--light error--text" role="alert">
                    <div class="v-messages__wrapper">
                      <div class="v-messages__message">
                        Пожалуйста, имейте менее 100 КБ фотографий!
                      </div>
                    </div>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="4" sm="6">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="20"
                  filled
                  label="Имя"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="4"
                sm="6"
                class="d-flex justify-center align-end"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="Телефонный номер"
                  filled
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                md="8"
                class="d-flex justify-center align-end mx-auto"
                style="padding-bottom:40px;"
              >
                <v-btn color="warning" large dark block @click="addComment">
                  Добавить
                </v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <v-row v-if="items.length">
        <v-col cols="12">
          <paginate name="items" :list="items" :per="8" class="paginate-list">
            <v-col v-for="(item, n) in paginated('items')" cols="12" :key="n">
              <CommentCard v-bind="item" />
            </v-col>
          </paginate>
          <paginate-links
            for="items"
            :limit="2"
            :show-step-links="true"
            class="pagination_item"
          ></paginate-links>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4"> </v-col>
      </v-row>
    </v-container>
    <Footer />
    <Alert />
  </div>
</template>
<script>
import axios from "axios";
import Count from "../../components/count";
import Footer from "../../components/footer";
import CommentCard from "../../components/commentCard";
import Alert from "../../components/alert";
export default {
  name: "productId",
  data: () => ({
    id: {},
    productPush: null,
    counterDialog: false,
    valid: false,
    img: "",
    photo: "",
    firstname: "",
    commentary: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 20 || "Name must be less than 20 characters",
    ],
    commentaryRules: [(v) => !!v || "Comment is required"],
    email: "+998",
    items: [],
    paginate: ["items"],
  }),
  components: {
    Count,
    Footer,
    CommentCard,
    Alert,
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
        this.items = id.comments;
        this.image = id.image;
      });
    let vm = this;
    let imageLoader = document.querySelector("#inputImage");
    imageLoader.addEventListener("change", handleImage, false);
    function handleImage(e) {
      let filetype = imageLoader.files[0].type;
      let reader = new FileReader();
      reader.onload = function(e) {
        if (filetype.indexOf("image") > -1) {
          vm.img = e.target.result;
          console.log(vm.img);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
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
    addComment() {
      axios.post(`http://localhost:3000/api/edit/${this.getParams}`, {
        name: this.firstname,
        comment: this.commentary,
        email: this.email,
        img: this.img,
      });
      this.$router.push("/");
      window.location.reload();
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
hr {
  margin: 25px 0;
}
.table {
  padding-left: 0px;
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
