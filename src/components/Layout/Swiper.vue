<template>
 <div class="swiper-container">

    <swiper :options="swiperOption" v-if="arr.length >1" class="slide-a">
      <template  v-for="(item,index) in arr" >
        <template v-if="(sum>index)&&(name==='splash')">
          <swiper-slide  :key="item.img" >
            <img :src="item.img" alt="" style="width:100%;height:100%">
             <button @click="clickHandler" v-if="index===1">立即进入</button>
            </swiper-slide>
        </template>
        <template v-if="name==='Header'">
        <swiper-slide  :key="item.img" ><img :src="item.img" alt="" style="width:100%;height:100%"></swiper-slide>
        </template>
      </template>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

 </div>
</template>



<script>

import request from 'util/request.js'
import { setTimeout } from 'timers';
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Indicator } from 'mint-ui';
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
 export default {
   props:["sum","name"],
   data () {
     return {
        arr:[],
        swiperOption: {
          direction: 'horizontal',
          // freeMode : true,
          // freeModeSticky : true,
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
           autoplay: this.name==='Header'?{
                  delay: 1000,
                  stopOnLastSlide: false,
                  disableOnInteraction: true,
          }:"",
          
        },
     }
   },
   components: {
      swiper,
      swiperSlide
   },
   methods:{
     clickHandler(){
       this.$router.replace("/home")
     }
   },
     async created(){

        Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
      });

    let data =  await request({
        url:`/operations/recommend? req_id=526d25b6-f849-688d-9b28-46ca033929ed&uuid=83527628-f960-5afa-9f54-df8222b887c9&city=全国&client_type=wap&client_os&url=https://wap.shixiseng.com/&uri=/&refer=https://wap.shixiseng.com/interns&ad_groups=[{"ad_position":"P_9_1","max_num":10}]`,
        method:"POST",
      })

      Indicator.close();

      this.arr=data.msg.P_9_1
    },

 }
</script>

<style lang="stylus" scoped>

.swiper-container
    height 100%
    .swiper-wrapper
      height 100%
      .swiper-slide
        position relative
        img
          width 100%
          height 100%
        button
          position absolute
          left 50%
          top 80%
          transform translate(-50%, 0)
          width 1.8rem
          height .55rem
          font-size .18rem
          border-radius .1rem
          color #fff
          background rgba(0, 0, 0, 0.8)
        
</style>
