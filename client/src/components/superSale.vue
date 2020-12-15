<template>
  <v-container>
    <h1 class="text-center">Super Sale Productions</h1>
    <v-row>
      <v-col v-for="n in superSale" :key="n._id" cols="12" sm="6">
        <v-card v-ripple elevation="4" shaped>
          <v-hover v-slot="{ hover }">
            <v-img :src="n.img">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex justify-center flex-column align-center transition-fast-in-fast-out overlay v-card--reveal"
                  style="height: 100%;"
                >
                  <h2>{{ n.text }}</h2>
                  <h1>{{ n.title }}</h1>
                </div>
              </v-expand-transition>
            </v-img>
          </v-hover>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    superSale: [
      {
        img:
          "https://hips.hearstapps.com/bpc.h-cdn.co/assets/16/24/1465933706-clinique-makeup-skincare.jpg",
        title: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit.",
      },
      {
        img:
          "https://www.beautyindependent.com/wp-content/uploads/2020/08/Niche-beauty-9-2000x1000.jpg",
        title: "Lorem ipsum dolor sit amet.",
        text: "Lorem ipsum dolor sit.",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.overlay {
  background: rgba(255, 156, 114, 0.3);
  color: white;
}
</style>
