<template>
    <!-- <Layout></Layout> -->
    <Job></Job>
    <!-- <Mine></Mine> -->
    <!-- <Register></Register> -->
</template>


<script>
import Layout from "@/components/Layout/Layout"
import Job from "@/components/Job/Job"
import Mine from "@/components/Mine/Mine"
import Register from "@/components/Mine/Register"
 var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }) 
  
export default {
  components:{
    Layout,
    Job,
    Mine,
    Register
  },
}
</script>




<style lang="stylus">
@import "~@/assets/reset.styl";

</style>
