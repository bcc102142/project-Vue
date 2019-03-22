<template>
  <div class="input-box">
    <input type="text" placeholder="输入关键词" data-sval="">
    <div class="search-btn">搜索</div>
  </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   }
 }
</script>

<style lang="stylus" scoped>
.input-box
  height .44rem
  padding .065rem .075rem .15rem .15rem
  background #fff
  input 
    padding 0 .13rem
    box-sizing border-box
    width 2.7rem
    height .3rem
    border solid 1px #e6e6ea
    border-radius .05rem
    background-color #eaeaea
    font-size .13rem
  div
    width: .655rem;
    height: .3rem;
    line-height: .3rem;
    border-radius: .05rem;
    background-color: #eaeaea;
    font-weight: 500;
    letter-spacing: 1.1px;
    text-align: center;
    color: #999;
    cursor: pointer;
    float right
</style>
