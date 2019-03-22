<template>
 <div class="navItem-container">
    <searchHeader></searchHeader>
    <totalHeader></totalHeader>
    <!-- <main>
      <div class="item-list">
        <Itemlist :arr="arr"></Itemlist>
      </div>
    </main> -->
    <backHome></backHome>
 </div>
</template>

<script>
import searchHeader from '@/components/Search/searchHeader'
import backHome from '@/components/Search/backHome'
import totalHeader from '@/components/Job/totalHeader'
 export default {
   data () {
     return {
       index: 4,
     }
   },
   components: {
       searchHeader,
       totalHeader,
       backHome
   },
     methods: {
    indexHandler(index) {
      if (this.index === index) {
        this.index = 5
      }
      this.index = index //第几个被点击
    },
  },
 }
</script>

<style lang="stylus" scoped>
.navItem-container
  height 100%
  display flex
  flex-direction column
 
</style>
