<template>
  <v-container>
    <h1 class="text-center">Super Sale Productions</h1>
    <v-row>
      <v-col v-for="n in superSale" :key="n._id" cols="12" sm="6">
        <super-card v-bind="n"/>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SuperCard from './supersaleCard'
export default {
  data: () => ({
  }),
  components:{
    SuperCard
  },
  props:{
    superSale:{
      type:Array
    }
  }
};
</script>
<style lang="scss" scoped>
.overlay {
  background: rgba(255, 156, 114, 0.3);
  color: white;
}
</style>
