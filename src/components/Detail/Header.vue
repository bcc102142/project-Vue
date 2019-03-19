 <template>
  <div class="head-container">
      <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/wap-logo.png?v=50ff9c6c5e8caa06ff2045ab559e31ca" alt="">
      <a href="#" class="open">APP内打开</a>
       <a href="#" class="download">下载APP</a>
  </div>
 </template>
 
 <script>
  export default {
    data () {
      return {
 
      }
    },
    components: {
 
    }
  }
 </script>
 
 <style lang="stylus" scoped>
.head-container
    width 100%
    height .49rem
    background #fff
    padding .09rem .125rem
    img 
        width .795rem
        height .26rem
    .download   
        height .294rem 
        width .75rem
        float right
        display block
        border 1px solid #10a6e2
        background-color #10a6e2
        color #fff
        border-radius .025rem
        text-align center
        line-height .294rem
        font-size .14rem
        font-weight normal
    .open   
        height .294rem 
        width .89rem
        margin-left .1rem
        float right 
        border 1px solid #10a6e2
        background-color #ffffff
        color #10a6e2
        border-radius .025rem
        text-align center
        line-height .294rem
        font-size .14rem
        font-weight normal
 </style>
 