<template>
    <router-view></router-view>
   
    <!-- <Register></Register> -->
    <!-- <Detail></Detail> -->
</template>


<script>

import Home from "home/Home"

import Register from "home/Register"
import Detail from "home/Detail"
 
  
export default {
  components:{
    Home,
    Register,
    Detail
  },
}
</script>




<style lang="stylus">
@import "~@/assets/reset.styl";

</style>
