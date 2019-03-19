<template>
  <div class="job-container">
    <Header @sendindex="indexHandler"></Header>
    <div class="tab-detail-wrap" :class="index === 0 ? 'active' : ''">
      <ul class="tab-detail-wrap-a">
        <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
          <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
        </li>
        <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
          <div class="line" :class="liindex === 1 ? 'active' : ''"></div>it互联网
        </li>
        <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
          <div class="line" :class="liindex === 2 ? 'active' : ''"></div>市场商务
        </li>
        <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
          <div class="line" :class="liindex === 3 ? 'active' : ''"></div>电子电器
        </li>
        <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
          <div class="line" :class="liindex === 4 ? 'active' : ''"></div>其他类型
        </li>
        <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
          <div class="line" :class="liindex === 5 ? 'active' : ''"></div>人市行政
        </li>
        <li :class="liindex === 6 ? 'active' : ''" @click="clickHandler(6)">
          <div class="line" :class="liindex === 6 ? 'active' : ''"></div>外语外贸
        </li>
        <li :class="liindex === 7 ? 'active' : ''" @click="clickHandler(7)">
          <div class="line" :class="liindex === 7 ? 'active' : ''"></div>财经法务
        </li>
      </ul>

      <div class="shadow"></div>
    </div>
    <div class="tab-detail-wrap" :class="index === 1 ? 'active' : ''">
      <ul class="tab-detail-wrap-a">
        <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
          <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
        </li>
        <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
          <div class="line" :class="liindex === 1 ? 'active' : ''"></div>热门城市
        </li>
        <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
          <div class="line" :class="liindex === 2 ? 'active' : ''"></div>ABCDE
        </li>
        <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
          <div class="line" :class="liindex === 3 ? 'active' : ''"></div>FGHIJ
        </li>
        <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
          <div class="line" :class="liindex === 4 ? 'active' : ''"></div>KLMN
        </li>
        <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
          <div class="line" :class="liindex === 5 ? 'active' : ''"></div>OPQR
        </li>
        <li :class="liindex === 6 ? 'active' : ''" @click="clickHandler(6)">
          <div class="line" :class="liindex === 6 ? 'active' : ''"></div>STUV
        </li>
        <li :class="liindex === 7 ? 'active' : ''" @click="clickHandler(7)">
          <div class="line" :class="liindex === 7 ? 'active' : ''"></div>WXYZ
        </li>
      </ul>

      <div class="shadow"></div>
    </div>
    <div class="tab-detail-wrap2" :class="index === 2 ? 'active' : ''">
      <ul class="tab-detail-wrap-a">
        <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
          <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
        </li>
        <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
          <div class="line" :class="liindex === 1 ? 'active' : ''"></div>50-100
        </li>
        <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
          <div class="line" :class="liindex === 2 ? 'active' : ''"></div>100-150
        </li>
        <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
          <div class="line" :class="liindex === 3 ? 'active' : ''"></div>150-200
        </li>
        <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
          <div class="line" :class="liindex === 4 ? 'active' : ''"></div>200-250
        </li>
        <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
          <div class="line" :class="liindex === 5 ? 'active' : ''"></div>250-300
        </li>
        <li :class="liindex === 6 ? 'active' : ''" @click="clickHandler(6)">
          <div class="line" :class="liindex === 6 ? 'active' : ''"></div>300以上
        </li>
      </ul>

      <div class="shadow"></div>
    </div>
    <div class="tab-detail-wrap3" :class="index === 3 ? 'active' : ''">
      <ul class="tab-detail-wrap-a">
        <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
          <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
        </li>
        <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
          <div class="line" :class="liindex === 1 ? 'active' : ''"></div>大专
        </li>
        <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
          <div class="line" :class="liindex === 2 ? 'active' : ''"></div>本科
        </li>
        <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
          <div class="line" :class="liindex === 3 ? 'active' : ''"></div>硕士
        </li>
        <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
          <div class="line" :class="liindex === 4 ? 'active' : ''"></div>博士
        </li>
        <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
          <div class="line" :class="liindex === 5 ? 'active' : ''"></div>其他
        </li>
      </ul>

      <div class="shadow"></div>
    </div>
    <div class="tab-detail-wrap" :class="index === 7 ? 'active' : ''">
      <ul class="tab-detail-wrap-a">
        <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
          <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
        </li>
        <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
          <div class="line" :class="liindex === 1 ? 'active' : ''"></div>一天
        </li>
        <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
          <div class="line" :class="liindex === 2 ? 'active' : ''"></div>两天
        </li>
        <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
          <div class="line" :class="liindex === 3 ? 'active' : ''"></div>三天
        </li>
        <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
          <div class="line" :class="liindex === 4 ? 'active' : ''"></div>四天
        </li>
        <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
          <div class="line" :class="liindex === 5 ? 'active' : ''"></div>五天
        </li>
        <li :class="liindex === 6 ? 'active' : ''" @click="clickHandler(6)">
          <div class="line" :class="liindex === 6 ? 'active' : ''"></div>六天
        </li>
        <li :class="liindex === 7 ? 'active' : ''" @click="clickHandler(7)">
          <div class="line" :class="liindex === 7 ? 'active' : ''"></div>七天
        </li>
      </ul>

      <div class="shadow"></div>
    </div>
    <div class="tab-detail-wrap3" :class="index === 8 ? 'active' : ''">
      <ul class="tab-detail-wrap-a">
        <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
          <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
        </li>
        <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
          <div class="line" :class="liindex === 1 ? 'active' : ''"></div>一月
        </li>
        <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
          <div class="line" :class="liindex === 2 ? 'active' : ''"></div>二月
        </li>
        <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
          <div class="line" :class="liindex === 3 ? 'active' : ''"></div>三月
        </li>
        <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
          <div class="line" :class="liindex === 4 ? 'active' : ''"></div>四月
        </li>
        <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
          <div class="line" :class="liindex === 5 ? 'active' : ''"></div>五月及以上
        </li>
      </ul>

      <div class="shadow"></div>
    </div>
    <main>
      <div class="item-list">
        <Itemlist :arr="arr"></Itemlist>
        
      </div>
    </main>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from "@/components/Layout/Tabbar"
import Header from "@/components/Job/Header"
import Itemlist from "@/components/Job/Itemlist"
import BScroll from 'better-scroll'
import request from 'util/request.js'
import _ from 'lodash'
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      index: 4,
      liindex: 0,
      initarr:[],
      arr:[]
    }
  },
  components: {
    Tabbar,
    Header,
    Itemlist
  },
  methods: {
    indexHandler(index) {
      if (this.index === index) {
        this.index = 5
      }
      this.index = index //第几个被点击
 
    },
    clickHandler(index) {
      this.liindex = index
    },
   
  },
 async created(){
    let data = await request({
      url:"/ajax/job.json"
    })
    this.initarr = data.text
    //给一个没有响应的量
    this.arr=this.arrlist = this.initarr
  },
  watch :{
    initarr(){
      let count =0
      let scroll = new BScroll('.item-list',{
         probeType:3,
         pullUpLoad:true
       })
       scroll.on("pullingUp",async() => {
         //请求下一列数据
         let datalist= await request({
            url:"/ajax/joblist.json"
          })
          this.addarr= _.chunk(datalist.text,5)
        
        //判断划到底了
          if(count < this.addarr.length){
             this.arr = [
                  ...this.arr,
                  ...this.addarr[count]
                ]
                 count++
          this.$nextTick(() =>{
          scroll.refresh()
          })
          }else{
            Toast({
            message: '到底了',
            position: 'bottom',
            duration: 1000
          });
          }
      
        
          scroll.finishPullUp()
        })
          
           
         
          }
          }
        
}
</script>

<style lang="stylus" scoped>
.job-container 
  height 100%
  display:flex
  flex-direction:column

  .tab-detail-wrap3 
    position absolute
    top 0.495rem
    height 6.66rem
    width 100%
    z-index -999
    overflow hidden
    transition all 1s
    opacity 0

    &.active 
      opacity 1
      z-index 999
    

    .shadow 
      height 5.24rem
      background rgba(0, 0, 0, 0.8)
    

    .tab-detail-wrap-a 
      height 2.665rem
      background #fff
      display flex
      flex-direction column
      justify-content space-between

      li 
        padding-left 0.19rem
        width 100%
        font-size 0.15rem
        line-height 0.44rem
        color #666
        background #F5F5F5
        border-bottom 1px solid #eaeaea
        display flex
        align-items center

        .line 
          height 0.24rem
          width 0.03rem
          background #02a0e9
          transition all 0.5s
          margin-right 0.19rem
          margin-left -0.19rem
          display none

          &.active 
            display block
        

        &.active 
          background #ffffff
 

  .tab-detail-wrap2 
    position absolute
    top 0.495rem
    height 6.66rem
    width 100%
    z-index -999
    opacity 0
    transition all 1s

    &.active 
      opacity 1
      z-index 999
    

    .shadow 
      height 5.24rem
      background rgba(0, 0, 0, 0.8)
    

    .tab-detail-wrap-a 
      height 3.11rem
      background #fff
      display flex
      flex-direction column
      justify-content space-between

      li 
        padding-left 0.19rem
        width 100%
        font-siz 0.15rem
        line-height 0.44rem
        color #666
        background #F5F5F5
        border-bottom 1px solid #eaeaea
        display flex
        align-items center

        .line 
          height 0.24rem
          width 0.03rem
          background #02a0e9
          transition all 0.5s
          margin-right 0.19rem
          margin-left -0.19rem
          display none

          &.active 
            display: block
        

        &.active 
          background: #ffffff
   

  .tab-detail-wrap 
    position absolute
    top 0.495rem
    height 6.66rem
    width 100%
    z-index -999
    transition all 1s
    opacity 0

    &.active 
      opacity 1
      z-index 999
    

    .shadow 
      height 5.24rem
      background rgba(0, 0, 0, 0.8)
    

    .tab-detail-wrap-a 
      height 3.555rem
      background #fff
      display flex
      flex-direction column
      justify-content space-between

      li 
        padding-left 0.19rem
        width 100%
        font-size 0.15rem
        line-height 0.44rem
        color #666
        background #F5F5F5
        border-bottom 1px solid #eaeaea
        display flex
        align-items center

        .line 
          height 0.24rem
          width 0.03rem
          background #02a0e9
          transition all 0.5s
          margin-right 0.19rem
          margin-left -0.19rem
          display none

          &.active 
            display block
          
        

        &.active 
          background #ffffff
  main 
    flex 1
    overflow hidden
    .item-list 
      height 100%
      padding 0 0.175rem
      background #ffffff
      

</style>
