<template>
  <div id="header">
    <div class="content-wrapper">
      <div class="avater">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="contain">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div class="support">

        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      seller: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" type="text/scss">
#header{
  color: #fff;
  background:rgba(7, 17, 27, 0.5);
  .content-wrapper{

  }
}
</style>
