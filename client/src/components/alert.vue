<template>
  <div>
    <v-snackbar v-model="snackbar" :timeout="2000">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
<script>
export default {
  props:{
    snackbar:Boolean,
    text:String
  }
};
</script>
<style lang="scss" scoped></style>
