<template>
 <div class="layout-container">
    <Header></Header>
    <Nav></Nav>
    <main>
        <div class="main-list">
          <Item></Item>
          <Item></Item>
        </div>
         <div class="main-more">前往职位列表，获取更多数据</div>
         <div class="main-about">关于我们</div>
    </main>
    
    <Tabbar></Tabbar>
 </div>
</template>

<script>
import Header from "@/components/Layout/Header"
import Tabbar from "@/components/Layout/Tabbar"
import Nav from "@/components/Layout/Nav"
import Item from "@/components/Layout/Item"


 export default {
   data () {
     return {

     }
   },
    components:{
    Header,
    Tabbar,
    Nav,
    Item
  }
 }
</script>

<style lang="stylus" scoped>

.layout-container
    display flex
    flex-direction column
    height 100%
    main
      margin-top .1rem
      background #f5f5f5
      flex-grow 1
      padding 0.07rem 0 0 0
      .main-list
        background #ffffff
        height 100%
        padding 0 0.175rem 0 0.175rem
      .main-more
        margin-top .2rem
        height .35rem
        background #ffffff 
        text-align center
        line-height .35rem
        color: #54b2ff;
      .main-about
        color: #bdc9da;
        text-align center
        margin-top .2rem
</style>

