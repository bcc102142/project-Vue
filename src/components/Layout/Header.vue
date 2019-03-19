<template>
 <div class="head-container">
       <Swiper></Swiper>

      <a href="#" class="head-search">
        <svg class="icon" aria-hidden="true" width="20" height="20">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
      </a>
 </div>
</template>

<script>


import Swiper from '@/components/Layout/Swiper'
 export default {
   data () {
     return {

     }
   },
   components: {
      Swiper
   }
 
 }
</script>

<style lang="stylus" scoped>
.head-container
  height 1.5rem
  width 100%
  background #ccc 
  .head-search 
    z-index 999
    display inline-block
    position absolute
    border-radius .15rem
    width .515rem
    height .275rem
    background #ffffff
    display flex
    align-items center
    justify-content center
    right .15rem
    top .15rem
</style>

