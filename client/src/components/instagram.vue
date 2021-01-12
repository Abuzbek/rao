<template>
  <div class="instagram py-12">
    <h1>
      INSTAGRAM
      <br />
      FOLLOW ON
      <a
        target="_blank"
        class="black--text"
        href="https://www.instagram.com/raon_koreacosmetic/"
        >@raon_koreacosmetic</a
      >
    </h1>
    <v-container>
      <v-row >
        <v-col class="colsInsta" cols="4" v-for="n in insta" :key="n.img">
          <a
            target="_blank"
            href="https://www.instagram.com/raon_koreacosmetic/"
          >
            <img :src="n.img" alt="" />
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    insta: []
  }),
  mounted(){
    axios
      .get('http://korearaon.uz/api/insta')
      .then(res => res.data)
      .then(insta => {
        console.log(insta);
        this.insta = insta 
      })
  }
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}
.black--text{
  text-decoration: none !important;
}
h1 {
  text-align: center;
}
@media (max-width:767px) {
  .colsInsta{
    padding: 0px 3px !important;
  }
}
</style>
