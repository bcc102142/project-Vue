<template>
 <div class="examine-container">
     <span class="title">网站审核</span>
      <span class="time">2019-03-11</span>
      <div class="job-tag ">'90后团队'</div>
        <div class="job-tag-wrap">
            <span>
                100-150/每天
            </span>
            <span>成都</span>
            <span>不限</span>
            <span>5天/周</span>
            <span>面议</span>
        </div>
        <a href="#">
            <img src="https://sxsimg.xiaoyuanzhao.com/F1/53/F100C4F651C0025814CAAB001DB38753.png" alt="">
            <div class="text-center">
                <p class="top">安源安全</p>
                <p>环保/50-150人</p>
                <p>www.anyuanhb.com</p>
            </div>
            
            <div class="row">
                <svg t="1553003586707" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1817" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="17.5"><path d="M321.11809 65.612347 257.085728 129.009236 638.078998 512.615007 253.882779 892.992247 317.372789 956.917162 765.594207 513.137916Z" p-id="1818"></path></svg>
            </div>
            
        </a>

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
@import '~assets/border.styl';
.examine-container
    height 3rem
    width 100%
    background #ffffff
    padding .10rem 0 0 .16rem
    margin-top .12rem
    .title
        max-width 2.7rem
        word-break break-all
        font-size .2rem
        font-weight 500
        text-align left
    .time
        font-size .12rem
        color #999
        float right
        padding-top .03rem
        padding-right .16rem
    .job-tag
        margin-to .16rem
        padding-right .16rem
        font-size .14rem
        color #10a6e2
        text-align left
        padding-top .1rem
    .job-tag-wrap
        width 3.50rem
        height .875rem
        margin-top .32rem
        padding-bottom .03rem
        text-align left
        border-botto dashed 1px #eaeaea
        span 
            margin-bottom .145rem
            display inline-block
            padding .05rem .1rem
            margin-right .135rem
            border-radius .04rem
            background-color #fafafa
            border solid 1px #eaeaea
            font-size .13rem
            color #666
    a
        position relative
        padding .175rem 0 .15rem
        display flex
        align-items center
        width 100% 
        height .91rem
        border(1px 0 0 0)
        img 
            width .54rem
        .text-center
            width 1.159rem
            height 100%
            margin-left .1rem
            display flex
            flex-direction column
            p
                text-align left
                color #999
                font-size .12rem
                word-break break-all
            .top
                color #666
                font-size .15rem
        .row 
            margin-left 1.5rem 
           
        
            
        
        
</style>
