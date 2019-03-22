<template>
  <div class="job-container">
    <totalHeader></totalHeader>
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
import totalHeader from "@/components/Job/totalHeader"
import Itemlist from "@/components/Job/Itemlist"
import BScroll from 'better-scroll'
import request from 'util/request.js'
import _ from 'lodash'
import { Toast,Indicator } from 'mint-ui';
export default {
  data() {
    return {
      initarr:[],
      arr:[]
    }
  },
  components: {
    Tabbar,
    totalHeader,
    Itemlist,
  },
 
 async created(){

    Indicator.open({
      text: 'Loading...',
      spinnerType: 'fading-circle'
    });
    let data = await request({
      url:"/ajax/job.json"
    })
    Indicator.close();
    this.initarr = data.text
    this.arr=this.arrlist = this.initarr
  },
  watch :{
    initarr(){
      let count =0
      let scroll = new BScroll('.item-list',{
         probeType:3,
         pullUpLoad:true,
         click: true,
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

  main 
    flex 1
    overflow hidden
    .item-list 
      height 100%
      padding 0 0.175rem
      background #ffffff
      

</style>
