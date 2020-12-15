<template>
  <v-app dark>
    <v-app-bar
      color="white"
      dense
      fixed
      height="64px"
      style="z-index:10;"
    >
    <router-link exact no-prefetch to="/">
      <v-img
        alt="star Logo"
        class="shrink ml-12"
        contain
        :src="require('./assets/images/logo.png')"
        transition="scale-transition"
        height="64px"
      />
    </router-link>
      <v-spacer></v-spacer>
      <v-menu
        rounded="b-xl"
        offset-y
        v-for="(n, i) in menus"
        :key="i"
      >
      <template v-slot:activator="{ attrs, on }">
        <v-badge
          :content="22"
          :value="22"
          :color="n.icon ? '#ff9d72' : 'transparent'"
          overlap
        >
          <v-btn
            v-bind="attrs"
            v-on="on"
            text
            class="btn_text"
            active-class="btn_text_active"
          >
            {{ n.title }}
            <v-icon right v-if="n.item">
              mdi-chevron-down
            </v-icon>
            
            <v-icon right v-if="n.icon">
              {{n.icon}}
            </v-icon>
          </v-btn>
        </v-badge>
      </template>
      <v-list v-if="n.item">
        <router-link class="itemHref" to="#!"
        v-for="(n, i) in n.item"
          :key="i">
        <v-list-item
          link
        >
          <v-list-item-title>
            {{n}}
          </v-list-item-title>
          
        </v-list-item>
        </router-link>
      </v-list>
    </v-menu>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      menus:[
        {
          title:'Главная',
          item:[
            'Слоган бренда',
            'Слоган бренда'
          ]
        },
        {
          title: 'O нас'
        },
        {
          title:'Женщины',
          item:[
            'Декоративная Косметика',
            'Средства для депиляции',
            'Уход за волосами',
            'Пакет масок',
            'Полноценный уход за кожей'
          ]
        },
        {
          title:'Мужчины',
          item:[
            'Декоративная Косметика',
            'Средства для депиляции',
            'Уход за волосами',
            'Пакет масок',
            'Полноценный уход за кожей',

          ]
        },
        {
          title:'Aккаунт',
          icon:'mdi-cart'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.btn_text{
  transition:.3s;
  &:hover{
    color:#ff9d72;
  }
  &_active{
    color:#ff9d72;
  }
}
.itemHref{
  color: black;
  text-decoration: none;
}
</style>
