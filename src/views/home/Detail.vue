<template>
 <div class="detail-container">
     <Header></Header>
     <main>
       <Examine></Examine>
      <Description></Description>
      <Workaddress></Workaddress>
     </main>
    <Footer></Footer>
</div>
</template>

<script>
import Header from "@/components/Detail/Header"
import Examine from "@/components/Detail/Examine"
import Description from "@/components/Detail/Description"
import Workaddress from "@/components/Detail/Workaddress"
import Footer from "@/components/Detail/Footer"
 export default {
   data () {
     return {

     }
   },
   components: {
        Header,
        Examine,
        Description,
        Workaddress,
        Footer
   }
 }
</script>

<style lang="stylus" scoped>
@import '~assets/reset.styl'
.detail-container
    height 100%
    display flex
    flex-direction column
    main
      flex 1
      overflow auto
     
      
</style>
