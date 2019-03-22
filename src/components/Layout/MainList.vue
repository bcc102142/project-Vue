<template>
 <div class="wrapper" >
          <Item   v-for="item in data" :key="item.id" :item="item"></Item>  
           <router-link class="main-more" tag="div" to="/home/job">前往职位列表，获取更多数据</router-link>
            <div class="main-about">关于我们</div>    
 </div>
</template>

<script>
import Item from '@/components/Layout/Item'
import request from '@/util/request.js' 
import { Indicator } from 'mint-ui';
 export default {
   data () {
     return {
       data:[]
     }
   },
   components: {
     Item
   },
   
     async created(){
    //获取数据
     Indicator.open({
        text: 'Loading...',
        spinnerType: 'fading-circle'
      });
      let data = await request({
        url:'/ajax/test.json'
      })
      Indicator.close();
      this.data = data.text
  },
 }
</script>

<style lang="stylus" scoped>
.main-more 
      margin-top 0.2rem
      height 0.35rem
      background #ffffff
      text-align center
      line-height 0.35rem
      color: #54b2ff
.main-about 
  color #bdc9da
  text-align center
  margin-top 0.2rem
 
</style>
