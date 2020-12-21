<template>
  <div class="dialog py-15">
    <div class="overlay" @click="$emit('form-false', false)">
      <v-btn icon dark @click="$emit('form-false', false)">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
      <v-card
        min-height="auto"
        max-height="90%"
        class="dialog_fullscreen rounded-lg"
      >
        <h3 class="display-2">Send</h3>
        <v-text-field
          v-model="name"
          label="Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="Phone Number"
          required
        ></v-text-field>
        <v-text-field
          v-model="telegram"
          label="Telegram @username"
          required
        ></v-text-field>
        <v-btn
          rounded
          block
          color="#ffd66b"
          @click="sendForm"
        >
          send
        </v-btn>
      </v-card>
  </div>
</template>
<script>
export default {
  data:()=>({
    name:null,
    phone:null,
    telegram:null
  }),
  methods:{
    sendForm(){
      this.$emit('form-send',{
        name:this.name,
        phone:this.phone,
        telegram:this.telegram,
        trueFalse:false,
        product:[]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog{
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.dialog_fullscreen {
  position: fixed;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  z-index: 11;
  // border-radius: ;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 1000px;
  min-width: 320px;
  padding: 20px 30px;
}
.overlay {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.3);
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  backdrop-filter: blur(6px);
}
</style>