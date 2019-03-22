<template>
 <div class="search-container">
   <searchHeader></searchHeader>
    <totalHeader></totalHeader>

    <div class="hot-search">
      <p>热门搜索</p>
      <div>
        <li>软件</li>
        <li>广告</li>
        <li>招聘</li>
        <li>市场</li>
        <li>银行</li>
        <li>行政</li>
        <li>财汇</li>
        <li>前端</li>
      </div>
    </div>
    <backHome></backHome>
 </div>
</template>

<script>
import searchHeader from '@/components/Search/searchHeader'
import backHome from '@/components/Search/backHome'
import totalHeader from '@/components/Job/totalHeader'
 export default {
   data () {
     return {
        
     }
   },
   components: {
     totalHeader,
     searchHeader,
     backHome
   },
 }
</script>

<style lang="stylus" scoped>
.search-container
  display flex
  flex-direction column
  
  .hot-search
    height 1.12rem
    padding .15rem 0 0 .15rem
    color #666
    p 
      font-size .14rem;
      font-weight normal
    div
      li 
        float left
        height .788rem
        width .55rem
        height .244rem
        list-style-type none
        margin: .15rem .1rem 0 0;
        display: inline-block;
        padding: .015rem .125rem .025rem;
        border-radius: .5rem;
        border: solid .01rem #ccc;
        color: #ccc;
  height 100%
  background #eaeaea
  display flex
  flex-direction:column
    
</style>
