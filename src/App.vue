<template>
  <div id="app">
    <v-header></v-header>
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
    <router-view></router-view>
  </div>
</template>

<script>
  import header from 'components/v-header/v-header.vue'
  export default {
    name: 'app',
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
          &:hover {
            color: rgb(240, 20, 20)
          }
        }
      }
    }
  }
</style>
