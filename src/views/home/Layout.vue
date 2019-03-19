<template>
  <div class="layout-container">
    <Header></Header>
    <Nav></Nav>
    <main>

      <div class="main-list">
            <MainList :arry="data"></MainList>
      </div>
     
    </main>

    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Header from "@/components/Layout/Header";
import Tabbar from "@/components/Layout/Tabbar";
import Nav from "@/components/Layout/Nav";
import MainList from "@/components/Layout/MainList";
import request from '@/util/request.js' 
import BScroll from 'better-scroll'
export default {
  data() {
    return {
      data : []
    };
  },
  components: {
    Header,
    Tabbar,
    Nav,
    MainList
  },
  async created(){
    //获取数据
      let data = await request({
        url:'/ajax/test.json'
      })
      this.data = data.text
  },
  mounted (){
    let scroll = new BScroll('.main-list')
    
  }
};
</script>

<style lang="stylus" scoped>
.layout-container 
  display flex
  flex-direction: column
  height 100%
  main 
    margin-top 0.1rem
    background #f5f5f5
    flex-grow 1
    padding 0.07rem 0 0 0
    overflow hidden
    height 100%
    .main-list 
      background #ffffff
      height 100%
      padding 0 0.175rem 0 0.175rem
    

</style>

