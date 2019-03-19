<template>
    <div class="wrapper">
        <Item v-for="item in arr" :key="item.id" :item="item"></Item>
    </div>
</template>

<script>
import Item from '@/components/Job/Item'
 export default {
     props:['arr'],
   data () {
     return {

     }
   },
   components: {
       Item
   }
 }
</script>

<style>

 
</style>
