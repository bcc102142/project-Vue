<template>
  <div class="home">
    <router-view></router-view>
  </div>
</template>

<script>
import Layout from "home/Layout"
import Job from "home/Job"
import Mine from "home/Mine"
export default {
  name: 'home',
  components: {
  Layout,
  Job,
  Mine
  }
}
</script>
<style lang="stylus">
@import "~@/assets/reset.styl";
.home
  height 100%

</style>