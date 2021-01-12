<template>
  <v-app dark>
    <v-app-bar
      color="white"
      dense
      fixed
      height="64px"
      style="z-index: 10"
      elevation="1"
      class="navbar_raon"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="d-block_lg"
      ></v-app-bar-nav-icon>
      <router-link exact no-prefetch to="/">
        <v-img
          alt="star Logo"
          class="shrink ml-12 imageApp"
          contain
          :src="require('./assets/images/logo.png')"
          transition="scale-transition"
          height="64px"
        />
      </router-link>
      <v-spacer></v-spacer>
      <v-menu rounded="b-xl" offset-y v-for="(n, i) in menus" :key="i">
        <template v-slot:activator="{ attrs, on }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            text
            class="btn_text d-none_lg"
            active-class="btn_text_active"
          >
            {{ n.title }}
            <v-icon right v-if="n.item"> mdi-chevron-down </v-icon>
          </v-btn>
        </template>
        <v-list v-if="n.item">
          <router-link
            class="itemHref"
            :to="n.href"
            v-for="(n, i) in n.item"
            :key="i"
          >
            <v-list-item link>
              <v-list-item-title>
                {{ n.name }}
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list>
      </v-menu>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" tag="router-link" to="/community" text>        
  	    <span class="first">Сообщество</span>
	    <v-icon right>account-multiple </v-icon>      
          </v-btn>
        </template>
        <span>Сообщество</span>
      </v-tooltip>
      <v-badge :content="`${productLenght}`" :color="'#ff9d72'" overlap>
        <v-btn tag="router-link" to="/checkout" text>
          <span class="first">Aккаунт</span>
          <v-icon right> mdi-cart </v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      style="z-index: 10"
      fixed
      temporary
      color="grey lighten-2"
    >
      <v-list-item>
        <router-link exact no-prefetch to="/">
          <v-img
            alt="star Logo"
            class="shrink ml-12"
            contain
            :src="require('./assets/images/logo.png')"
            transition="scale-transition"
            height="100px"
          />
        </router-link>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-group v-for="n in menus" :key="n.title" :value="false">
          <template v-slot:activator>
            <v-list-item-title>{{ n.title }}</v-list-item-title>
          </template>
          <v-list-item v-for="(l, i) in n.item" :key="i" link>
            <router-link
              style="
                color: rgba(0, 0, 0, 0.87) !important;
                text-decoration: none;
              "
              :to="l.href"
            >
              <v-list-item-title v-text="l.name"></v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  data() {
    return {
      drawer: null,
      menus: [
        {
          title: "O нас",
          item: [
            {
              name: "Бренд RAON",
              href: "/brend",
            },
            {
              name: "История RAON",
              href: "/history",
            },
          ],
        },
        {
          title: "Женщины",
          item: [
            {
              name:'Все',
              href:"/women/all"
            },
            {
              name: "Декоративная Косметика",
              href: "/women/cosmetic",
            },
            {
              name: "Средства для депиляции",
              href: "/women/depilatory",
            },
            {
              name: "Уход за волосами",
              href: "/women/hair_care",
            },
            {
              name: "Очищение",
              href: "/women/clearing",
            },
            {
              name: "Маска / Пакет",
              href: "/women/pack_of_masks",
            },
            {
              name: "Полноценный уход за кожей",
              href: "/women/Complete_skin_care",
            },
            {
              name:'НАБОР',
              href:'/women/set'
            }
          ],
        },
        {
          title: "TonyMoly",
          item: [
            {
              name:'Все',
              href:"/man/all"
            },
            {
              name: "Декоративная Косметика",
              href: "/man/cosmetic",
            },
            {
              name: "Средства для депиляции",
              href: "/man/depilatory",
            },
            {
              name: "Уход за волосами",
              href: "/man/hair_care",
            },
            {
              name: "Очищение",
              href: "/women/clearing",
            },
            {
              name: "Пакет масок",
              href: "/man/pack_of_masks",
            },
            {
              name: "Полноценный уход за кожей",
              href: "/man/Complete_skin_care",
            },
            {
              name:'НАБОР',
              href:'/women/set'
            }
          ],
        },
      ],
      products: [],
    };
  },
  computed: {
    getPro() {
      return this.$store.getters.getProducts;
    },
    productLenght() {
      return this.getPro.filter((i) => i !== undefined).length;
    },
  },
  mounted() {
    this.$store.dispatch("setProduct");
    // this.products = this.getProducts.filter((i) => i !== undefined);
    // console.log(this.products);
  },
};
</script>
<style lang="scss" scoped>
.btn_text {
  transition: 0.3s;
  &:hover {
    color: #ff9d72;
  }
  &_active {
    color: #ff9d72;
  }
}
.itemHref {
  color: black;
  text-decoration: none;
}
.navbar_raon {
  opacity: 0.8;
}
.d-block_lg {
  display: none;
}
@media (max-width: 992px) {
  .d-none_lg {
    display: none !important;
  }
  .d-block_lg {
    display: block;
  }
}
@media (max-width: 500px) {
  .imageApp {
    margin-left: 10px;
  }
  .first{
    display:none;
  }
}
</style>
