<template>
 <div class="nav-container">
     <ul>
         <li>
             <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon1.png?v=003490370e820aa04da4456274752651" alt="">
             <b>短期实习</b>
         </li>
         <li>
             <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon2.png?v=c8d8540ecd03c8612fbd345253f7158a" alt="">
             <b>一周两天</b>
         </li>
         <li>
             <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon3.png?v=0c3f223e76f64e5ec4796609890f587a" alt="">
             <b>转正机会</b>
         </li>
         <li>
             <img src="https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/bar-icon4.png?v=80621aa6ef0a03e91a9c25f331f6f26b" alt="">
             <b>日薪200</b>
         </li>
     </ul>
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
.nav-container
    height 1rem
    background #fff
    padding-top .13rem
    display: inline-block;
    ul
        height 100%
        display flex
        li 
            flex 1
            display flex
            flex-direction column
            justify-content flex-start
            align-items center
            img 
                width .48rem
                height .48rem
                display block
            b 
                margin-top .07rem
                font-weight  normal
                font-size: .15rem;
                color: #5a647a;
 
</style>
