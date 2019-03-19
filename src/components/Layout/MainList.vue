<template>
 <div class="wrapper">
          <Item v-for="item in arry" :key="item.id" :item="item"></Item>  
           <div class="main-more">前往职位列表，获取更多数据</div>
            <div class="main-about">关于我们</div>    
 </div>
</template>

<script>
import Item from '@/components/Layout/Item'
 export default {
   props:['arry'],
   data () {
     return {

     }
   },
   components: {
     Item
   },
   mounted(){
   }
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
