<template>
  <div class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" lg="4">
          <h2>CS Markazi</h2>
          <a class="phones" href="tel:+998909935787">+998 90 993 57 87</a>
          <a class="phones two" href="tel:+998909945787">+998 90 994 57 87</a>
          <p>
            Ish kunlari: 9:00 dan 18:00 gacha (tushlik vaqti: 12:00 dan 1:00
            gacha)
            <br />
            Yopiq: shanba, yakshanba va dam olish kunlari
          </p>
        </v-col>
        <v-col style="border-left:1px solid #b6b4b49a;border-right:1px solid #b6b4b49a;" cols="12" md="6" lg="4">
          <div class="px-6">
            <h2>BANK INFO</h2>
            <ul>
            <li>
              <span>VISA:</span>
              4242 4242 4242 4242
            </li>
            <li>
              <span>UZCARD:</span>
              8585 8585 8585 8585
            </li>
            <li>
              <span>PAYME:</span>
              0998 0998 0998 0998
            </li>
            <li>
              <span>CLICK:</span>
              1234 1234 1234 1234
            </li>
            <li>
              <span>Hisob egasi:</span>
              Kim Min Jun
            </li>
            </ul>
          </div>
          
        </v-col>
        <v-col cols="12" md="6" lg="4">
          <div class="px-6">
            <h2>Bizning manzil</h2>
            <p>
              Toshkent shahar, Yakkasaroy tumani, Shota Rustavelli ko'chasi 34/33
            </p>
            <div class="d-flex align-center">
              <v-btn v-for="(n, i) in icons" :key="i" tag="a" :href="n.href" target="_blank" class="mx-2" fab dark small color="#2a2a2a">
                <v-icon dark>
                  {{n.icon}}
                </v-icon>
              </v-btn>
            </div>
          </div>
          
        </v-col>
      </v-row>
      <hr class="my-5">
      <p class="text-center subtitle-1">© 2020 Copyright: korearaon.uz <span>Created By : atom-peach.uz</span></p>
    </v-container>
  </div>
</template>
<script>
export default {
  data:()=>({
    icons:[
      {
        icon:'mdi-map-marker',
        href:"https://fb.com"
      },
      {
        icon:'mdi-instagram',
        href:"https://instagram.com/raon_koreacosmetic"
      },
      {
        icon:'mdi-phone',
        href:"tel:+998909935787"
      },
      {
        icon:'mdi-telegram',
        href:"https://t.me/RaonKorea"
      },
    ]
  })
};
</script>
<style lang="scss" scoped>
.footer{
  background: #141414;
  padding-top:60px ;
}
h2{
  padding-bottom: 15px;
  color: white;
  font-size: 16px;
  font-weight: 400;
}
ul{padding-left: 0;}
ul li{list-style: none;margin-bottom: 6px; color: #b6b4b4;}
ul li span{margin-right: 5px; color: white;}
.phones{text-decoration: none; display: block; color: white;font-size: 19px;}
.phones.two{margin-bottom: 10px;}
p{
  font-size: 14px;
  color: #b6b4b4;
}
p span{
  color: white;
  margin-left: 10px;
  display: block;
}
</style>
