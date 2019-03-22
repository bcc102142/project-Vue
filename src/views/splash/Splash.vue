<template>
 <div class="splash-container">
    <Swiper :sum="sum" :name="name"></Swiper>
 </div>
</template>

<script>
import Swiper from '@/components/Layout/Swiper'
 export default {
   data () {
     return {
       sum:2,
       name:"splash"
     }
   },
   components: {
      Swiper
   }
 }
</script>

<style lang="stylus" scoped>
.splash-container
  height 100%
 
</style>
