<template>
 <div class="item-container">
      <img :src=item.img alt="">
    <div class="item-center">
      <p class="item-center-title">{{item.title}}</p>
      <p class="item-center-center">{{item.company}}</p>
      <div>
        <p>{{item.address}}</p>
      </div>
    </div>
    <div class="item-right">
      <p class="item-right-top">{{item.showtime}}</p>
      <p class="item-right-bottom">{{item.salary}}</p>
    </div>
     <div>

     </div>
 </div>
</template>

<script>
 export default {
   props:['item'],
   data () {
     return {

     }
   },
   components: {

   },
   mounted(){

   }
 }
</script>

<style lang="stylus" scoped>
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
