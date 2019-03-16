<template>
 <div class="item-container">
    <img src="https://sxsimg.xiaoyuanzhao.com/4A/E4/4AF73600AB0154217006CD64BC91CFE4.png" alt="">
    <div class="item-center">
      <p class="item-center-title">测试开发实习生</p>
      <p class="item-center-center">阿里巴巴</p>
      <div>
        <svg t="1552698659165" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1868" xmlns:xlink="http://www.w3.org/1999/xlink" width="10" height="10"><path d="M512 473.8m-166.2 0a166.2 166.2 0 1 0 332.4 0 166.2 166.2 0 1 0-332.4 0Z" fill="#FFCE00" p-id="1869"></path><path d="M512 939.3c-41.2 0-79.9-16-109-45.1L243.7 734.8c-36.2-36.2-64.2-78.4-83.3-125.5-18.4-45.5-27.8-93.5-27.8-142.7 0-49.3 9.3-97.3 27.8-142.7 19.1-47.1 47.1-89.3 83.3-125.5 36.2-36.2 78.4-64.2 125.5-83.3 45.5-18.4 93.5-27.8 142.7-27.8 49.3 0 97.3 9.3 142.7 27.8 47.1 19.1 89.3 47.1 125.5 83.3 36.2 36.2 64.2 78.4 83.3 125.5 18.4 45.5 27.8 93.5 27.8 142.7 0 49.3-9.3 97.3-27.8 142.7-19.1 47.1-47.1 89.3-83.3 125.5L621 894.1c-29.1 29.2-67.8 45.2-109 45.2z m0-762.1c-77.3 0-150 30.1-204.6 84.8-54.7 54.7-84.8 127.3-84.8 204.6s30.1 150 84.8 204.6l159.3 159.3c12.1 12.1 28.2 18.8 45.3 18.8 17.1 0 33.2-6.7 45.3-18.8l159.3-159.3c54.7-54.7 84.8-127.3 84.8-204.6s-30.1-150-84.8-204.6C662 207.3 589.3 177.2 512 177.2z" fill="#242F44" p-id="1870"></path></svg>
        <p>杭州</p>
      </div>
    </div>
    <div class="item-right">
      <p class="item-right-top">03-14-09:03</p>
      <p class="item-right-bottom">￥300-400/天</p>
    </div>
     <div>

     </div>
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
@import '~@/assets/border.styl'
.item-container
    border(0 0 1px 0)
    background #fff
    height .965rem
    width 100% 
    padding .145rem 0 .165rem 0 
    img 
      height .6rem
      width .6rem
      float left
    .item-center
      float left
      display flex
      flex-direction column
      height 100%
      justify-content space-between
      margin-left .1rem
      div
        display flex
        align-items center
        width .5rem
        p 
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: .125rem;
          color: #bdc9da;
          margin-left .05rem

      .item-center-title
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .16rem;
        color: #5a647a;
      .item-center-center
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: .125rem;
        color: #bdc9da;
    .item-right
      float right
      display flex
      flex-direction column
      .item-right-top 
        margin-top: .06rem;
        font-size: .12rem;
        color: #d2dbef;
        text-align: right;
      .item-right-bottom
        margin-top: .215rem;
        font-size: .14rem;
        color: #f96969;
        font-weight: bold;
</style>
