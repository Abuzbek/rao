<template>
  <section class="location">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" lg="3" v-for="n in icon_set" :key="n.icon">
            <div class="icon_set d-flex">
              <v-btn tag="a" :href="n.href" target="_blank" class="mx-2" fab dark :color="n.color">
                <v-icon dark> mdi-{{ n.icon }} </v-icon>
              </v-btn>
              <div class="icon_text">
                <a :href="n.href" target="_blank" class="black--text">
                 <h3 >{{ n.heading }}</h3>
                  <p >{{ n.title }}</p> 
                </a>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
</template>
<script>
export default {
  data: () => ({
    icon_set: [
      {
        icon: "map-currency-usd",
        color: "#ffd66b",
        heading: "Стоимость доставки",
        title: "Бесплатная доставка при покупке на сумму свыше 600 000 сумов.",
        href:"#!"
      },
      {
        icon: "phone",
        color: "#4267B2",
        heading: "Наши телефоны",
        title: "+998 90 993 57 87",
        href:"tel:+998909935787"
      },
      {
        icon: "instagram",
        color: "#C13584",
        heading: "Наш адрес в Instagram",
        title: "@raon_koreacosmetic",
        href:"https://instagram.com/raon_koreacosmetic"
      },
      {
        icon: "telegram",
        color: "#0088cc",
        heading: "Наш адрес в Telegram",
        title: "@RaonKorea",
        href:"https://t.me/RaonKorea"
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.black--text {
  text-decoration: none !important;
}
</style>
