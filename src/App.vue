<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link :to="{path:'goods'}">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'ratings'}">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path:'seller'}">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from 'components/v-header/v-header.vue'
  const ERR_OK = 0;
  export default{
    data(){
      return {
        seller: {}
      }
    },
    created(){
      this.$http.get('/api/seller').then(response => {
        response = response.data;
        if (response.errno === ERR_OK) {
          this.seller = response.data;
        }
      })
    },
    components: {
      'v-header': header
    }
  }
</script>
<style lang="scss" type="text/scss">
  @import "./common/css/mixin";

  #app {
    .tab {
      display: flex;
      width: 100%;
      height: 40px;
      line-height: 40px;
      @include border-1px(rgba(7, 17, 27, 0.1));
      .tab-item {
        flex: 1;
        text-align: center;
        & > a {
          display: block;
          font-size: 14px;
          color: rgb(77, 85, 93);
          &.active {
            color: rgb(240, 20, 20)
          }
        }
      }
    }
  }
</style>
