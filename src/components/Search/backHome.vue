<template>
     <router-link to="/home" tag="div" class="back-home">

    </router-link>
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
.back-home
    width .35rem
    height .35rem
    position: fixed;
    display: inline-block;
    z-index: 10;
    right: .21rem;
    bottom: .135rem;
    background-image: url('https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/back_index.png'); 
    background-size 100%
</style>
