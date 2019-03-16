<template>
 <div class="header-container">
    <ul class="ul-one" :class="ulshow === true ? 'active' : ''">
        <li :class="index === 0 ? 'active' : ''" @click="clickHandler(0)">类型</li>
        <li :class="index === 1 ? 'active' : ''" @click="clickHandler(1)">地点</li>
        <li :class="index === 2 ? 'active' : ''" @click="clickHandler(2)">日薪</li>
        <li :class="index === 3 ? 'active' : ''" @click="clickHandler(3)">学历</li>
    </ul>
       <div @click="ellipsisHandler">...</div>
     <ul class="ul-two" :class="ulshow === false ? 'active' : ''">
        <li :class="index === 7 ? 'active' : ''" @click="clickHandler(7)">每周实习天数</li>
        <li :class="index === 8 ? 'active' : ''" @click="clickHandler(8)">不限</li>
    </ul>
 
    
 </div>
</template>

<script>
 export default {
   data () {
     return {
         index:4,
         ulshow:true
     }
   },
   components: {

   },
   methods :{
       clickHandler(index){
            if(index===this.index){
                this.index=5
                this.$emit('sendindex',this.index)
                return
            }

            this.index = index
           this.$emit('sendindex',this.index)
       },
       ellipsisHandler(){
           this.ulshow = !this.ulshow
           console.log(this.ulshow)
       }
   }
 }
</script>

<style lang="stylus" scoped>
@import '~@/assets/border.styl';
.header-container
    height .49rem
    background #ffffff
    width 100%
    .ul-two
        width 3.397rem
        height 0
        overflow hidden
        transition all 1s
        float left
        &.active
            height 100%
        li 
            float left 
            width 1.677rem
            height 100%
            position relative
            border(0 1px 0 0)
            text-align center
            line-height .49rem
            font-size .15rem
            cursor: pointer;
            &.active
                color #02a0e9
        li:before 
            content: "";
            position: absolute;
            right: .13rem;
            bottom: .085rem;
            border-bottom: .06rem solid #999;
            border-left: .06rem solid transparent;


    .ul-one 
        width 3.387rem
        height 0
        overflow hidden
        transition all 1s
        float left
        &.active
            height 100%
        li 
            float left 
            width .844rem
            height 100%
            position relative
            border(0 1px 0 0)
            text-align center
            line-height .49rem
            font-size .15rem
            cursor: pointer;
            &.active
                color #02a0e9
        li:before 
            content: "";
            position: absolute;
            right: .13rem;
            bottom: .085rem;
            border-bottom: .06rem solid #999;
            border-left: .06rem solid transparent;
div
    height 100%
    width .275rem
    float right  
    text-align center
    line-height .49rem
    font-size .15rem
    cursor: pointer;       
</style>
