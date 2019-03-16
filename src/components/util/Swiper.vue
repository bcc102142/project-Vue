<template>
 <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide-a"><a href="#"></a></div>
                <div class="swiper-slide slide-b"><a href="#"></a></div>
                <div class="swiper-slide slide-c"><a href="#"></a></div>
               <div class="swiper-slide slide-d"><a href="#"></a></div>
               <div class="swiper-slide slide-e"><a href="#"></a></div>
               <div class="swiper-slide slide-f"><a href="#"></a></div>
               <div class="swiper-slide slide-g"><a href="#"></a></div>
       
    
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
         
        </div>

 </div>
</template>



<script>


 export default {
   data () {
     return {

     }
   },
   components: {

   },
    mounted() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
        el: '.swiper-pagination',
        },
        autoplay: {
            delay: 1000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
    });
 
  }
 }
</script>

<style lang="stylus" scoped>

.swiper-container
    height 1.5rem
    .slide-a
        background-size 100% 100%
        background-image url('https://sxsimg.xiaoyuanzhao.com/3E/F2/3E27ABB082C6D75623DA38D453307FF2.png'); 
    .slide-b
        background-size 100% 100%
        background-image url('https://sxsimg.xiaoyuanzhao.com/80/AC/80DBEFC058FA5B6520C08EC3A96522AC.png');
    .slide-c
        background-size 100% 100%
        background-image url('https://sxsimg.xiaoyuanzhao.com/14/96/14DF631E72D31D37AE2BF09BD0D4A096.png');
    .slide-d
        background-size 100% 100%
        background-image url('https://sxsimg.xiaoyuanzhao.com/EB/11/EB1DD30DD42BC6757B7EAC255083FB11.png');
    .slide-e
        background-size 100% 100%
        background-image url('https://sxsimg.xiaoyuanzhao.com/20/A4/20205E5840D8EC0F8D2A9A0110A1BBA4.png');
    .slide-f
        background-size 100% 100%
        background-image url('https://sxsimg.xiaoyuanzhao.com/03/E7/03806D828F0F063851F442C074F6B3E7.png');
    .slide-g
        background-size 100% 100%
        background-image url('https://sxsimg.xiaoyuanzhao.com/CD/3E/CD05F3C50D54DAE07B1199343FE6A63E.png');
 
</style>
