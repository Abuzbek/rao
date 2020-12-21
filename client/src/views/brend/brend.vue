<template>
  <div>
    <header>
      <img
        src="https://logyka.net/assets/templates/img/1455/SEOLogyka.jpg"
        alt=""
      />
    </header>
    <section>
      <h1>
        RAON
      </h1>
    </section>
    <Footer/>
  </div>
</template>
<script>
import Footer from '../../components/footer'
import img from "../../assets/RAON.jpg";
export default {
  data: () => ({
    img,
  }),
  components:{
    Footer
  }
};
</script>
<style lang="scss" scoped>
img {
  max-width: 100%;
  height: auto;
}
h1 {
  font-family: "Merriweather", serif;
  font-size: 400px;
  font-weight: 900;
  line-height: 488px;
  background: url("https://prettyzone.net/image/cache/catalog/promotion/pretty-zone-1-1920x600.jpg");
  background-position: -185px -10px;
  cursor: default;
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}
</style>
