<template>
 <div class="footer-container">
     <div class="delivery">马上投递</div>
     <div class="collection">收藏</div>
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
.footer-container
    height .49rem
    width 100%
    background #ffffff
    padding .065rem .15rem
    .delivery
        width 70%
        height .36rem
        border-radius .02rem
        background-color #10a6e2
        color #fff
        float left
        text-align center
        line-height .36rem
    .collection
        width 27%
        height .36rem
        border-radius .02rem
        background-color #fafafa
        border solid 1px #ccc
        color #666
        float right
        text-align center
        line-height .36rem
</style>
