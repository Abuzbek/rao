<template>
  <div class="community">
    <header
      :style="`background: url(${background}) no-repeat center center / cover;`"
    />
    <v-container>
      <v-row>
        <v-col cols="12" sm="10" md="10" class="ma-auto" >
          <paginate name="post" :list="post" :per="8" class="paginate-list">
            <v-col  v-for="(item, n) in paginated('post')" cols="12" :key="n">
              <communityCard v-bind="item"/>
            </v-col>
          </paginate>
          <paginate-links
            for="post"
            :limit="2"
            :show-step-links="true"
            class="pagination_item"
          ></paginate-links>
        </v-col>
      </v-row>
    </v-container>
    <Footer/>
  </div>
</template>
<script>
import axios from "axios";
import Footer from "../components/footer";
import communityCard from "../components/communityCard";

export default {
  data: () => ({
    post: [],
    background:'',
    paginate: ["post"],
  }),
  components:{
    Footer,
    communityCard
  },
  mounted() {
    axios
      .get("http://localhost:3000/post/api")
      .then((res) => res.data)
      .then((post) => {
        console.log(post);
        this.post = post;
      });
    axios
      .get('http://localhost:3000/api/back/community') 
      .then((res) => res.data)
      .then((post) => {
        console.log(post);
        post.map(n => this.background = n.img);
      }); 
  },
};
</script>
<style lang="scss" scoped>
.community {
  header {
    height: calc(600px - 65px);
    margin-top: 65px;
    padding-bottom: 0;
  }
}
</style>
<style lang="scss">
.pagination_item {
  display: flex;
  justify-content: center;
  align-items: center;
  li {
    background: #fff;
    border-radius: 4px;
    font-size: 1rem;
    height: 34px;
    margin: 0.3rem;
    min-width: 34px;
    padding: 0 5px;
    text-decoration: none;
    transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
    width: auto;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: rgba(0, 0, 0, 0.87);
    }
  }
  li.active {
    color: #fff;
    background-color: #1867c0 !important;
    border-color: #1867c0 !important;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    font-size: 1rem;
    height: 34px;
    margin: 0.3rem;
    min-width: 34px;
    padding: 0 5px;
    text-decoration: none;
    transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
    width: auto;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: white;
    }
  }
}
#labelFile {
  background: rgba(0, 0, 0, 0.06);
  display: inline-block;
  width: 100%;
  min-height: 56px;
  padding: 0 12px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.42);
  cursor: pointer;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  span {
    margin-left: 9px;
    color: rgba(0, 0, 0, 0.6);
  }
}
#inputImage {
  display: none;
}
</style>

