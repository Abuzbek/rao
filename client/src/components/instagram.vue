<template>
  <div class="instagram py-12">
    <v-container>
      <v-row>
        <v-col
        cols="4"
        v-for="n in insta"
        :key="n.img"
        >
          <img :src="n.img" alt="">
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data:()=>({
    insta:[
      {
        img:'https://instagram.ftas2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/130812588_816972135819226_8390779644379357284_n.jpg?_nc_ht=instagram.ftas2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=1ItWOmDnsXwAX-Fxt1c&tp=1&oh=d10bd32ca27e8264544ef52c754686be&oe=60027683'
      },
      {
        img:'https://instagram.ftas2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/130458947_3614870301922010_8615101169404873900_n.jpg?_nc_ht=instagram.ftas2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=NzjZII3Ou5kAX_UwJa-&tp=1&oh=3aa5503082cc9dbd94e410e297a03cea&oe=6002D4D1'
      },
      {
        img:'https://instagram.ftas2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.2.1180.1180a/s640x640/130593236_1257276981322537_6467039375835725354_n.jpg?_nc_ht=instagram.ftas2-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=zkWEEaNymzQAX8n7DiP&tp=1&oh=84923451483e93fd13a717fbe8c713f6&oe=600357A3'
      },
      {
        img:'https://instagram.ftas2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.2.1180.1180a/s640x640/131194166_722575681967896_3245898116255469929_n.jpg?_nc_ht=instagram.ftas2-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=jFS5FjzE20sAX9549-0&tp=1&oh=9dc2a87c089c3b9547c86b27bfd6eafd&oe=60017282'
      },
      {
        img:'https://instagram.ftas2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.2.1180.1180a/s640x640/130487486_2191657540979259_4227472753722941642_n.jpg?_nc_ht=instagram.ftas2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=ps9r2zQzpNcAX-vSY_e&tp=1&oh=eed389bc8a0d4337cc0acfe859df3a50&oe=6000FB43'
      },
      {
        img:'https://instagram.ftas2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.2.1180.1180a/s640x640/131020980_300488644648754_5613693723714041647_n.jpg?_nc_ht=instagram.ftas2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=jaLB2qNRCMMAX8ccVfD&tp=1&oh=dfaa2c3ce8304f3dccd7856f6e8eeb37&oe=6000E26D'
      },
      {
        img:'https://instagram.ftas2-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/130965814_3038952243009156_3090801334032996437_n.jpg?_nc_ht=instagram.ftas2-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=qJa_Y3f-A58AX_2o4Nh&tp=1&oh=b9f95d4870826f296f8e2e295dd6663d&oe=6000C14F'
      },
      {
        img:'https://instagram.ftas2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/130466832_381612276250989_8586287073270579817_n.jpg?_nc_ht=instagram.ftas2-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=4whf2DjNlXcAX9bA7yU&tp=1&oh=f640629b2a0bfb7e1490e2a4d878648d&oe=60013415'
      },
      {
        img:'https://instagram.ftas2-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/130547606_699697384254695_2197058898924523965_n.jpg?_nc_ht=instagram.ftas2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=_PED_RMjEdUAX_KvhXh&tp=1&oh=abd0a315bc93bddee7f0be280212b478&oe=60012AD6'
      },
    ]
  })
};
</script>
<style lang="scss" scoped>
img{max-width: 100%;height: auto;}
</style>
