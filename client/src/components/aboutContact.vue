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
        icon: "map-marker",
        color: "#ffd66b",
        heading: "Bizning manzilimiz",
        title: "Shota Rustavelli ko'chasi 34/33",
        href:"https://www.google.com/maps/place/41%C2%B017'25.5%22N+69%C2%B015'33.0%22E/@41.290409,69.259167,16z/data=!4m5!3m4!1s0x0:0x0!8m2!3d41.290409!4d69.259167"
      },
      {
        icon: "phone",
        color: "#4267B2",
        heading: "Telefon raqamlarimiz",
        title: "+998 90 993 57 87",
        href:"tel:+998909935787"
      },
      {
        icon: "instagram",
        color: "#C13584",
        heading: "Instagram manzilimiz",
        title: "@raon_koreacosmetic",
        href:"https://instagram.com/raon_koreacosmetic"
      },
      {
        icon: "telegram",
        color: "#0088cc",
        heading: "Telegram manzilimiz",
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