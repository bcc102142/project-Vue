<template>
 <div class="totalHeader-container">
     <div class="header-container">
        <ul class="ul-one" :class="ulshow === true ? 'active' : ''">
            <li :class="index === 0 ? 'active' : ''" @click="liClickHandler(0)">类型</li>
            <li :class="index === 1 ? 'active' : ''" @click="liClickHandler(1)">地点</li>
            <li :class="index === 2 ? 'active' : ''" @click="liClickHandler(2)">日薪</li>
            <li :class="index === 3 ? 'active' : ''" @click="liClickHandler(3)">学历</li>
        </ul>
        <div @click="ellipsisHandler">...</div>
        <ul class="ul-two" :class="ulshow === false ? 'active' : ''">
            <li :class="index === 7 ? 'active' : ''" @click="liClickHandler(7)">每周实习天数</li>
            <li :class="index === 8 ? 'active' : ''" @click="liClickHandler(8)">不限</li>
        </ul>
    </div>

    <div class="nav-inside">
        <div class="tab-detail-wrap" :class="index === 0 ? 'active' : ''">
        <ul class="tab-detail-wrap-a">
            <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
            <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
            </li>
            <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
            <div class="line" :class="liindex === 1 ? 'active' : ''"></div>it互联网
            </li>
            <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
            <div class="line" :class="liindex === 2 ? 'active' : ''"></div>市场商务
            </li>
            <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
            <div class="line" :class="liindex === 3 ? 'active' : ''"></div>电子电器
            </li>
            <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
            <div class="line" :class="liindex === 4 ? 'active' : ''"></div>其他类型
            </li>
            <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
            <div class="line" :class="liindex === 5 ? 'active' : ''"></div>人市行政
            </li>
            <li :class="liindex === 6 ? 'active' : ''" @click="clickHandler(6)">
            <div class="line" :class="liindex === 6 ? 'active' : ''"></div>外语外贸
            </li>
            <li :class="liindex === 7 ? 'active' : ''" @click="clickHandler(7)">
            <div class="line" :class="liindex === 7 ? 'active' : ''"></div>财经法务
            </li>
        </ul>

        <div class="shadow"></div>
        </div>
        <div class="tab-detail-wrap" :class="index === 1 ? 'active' : ''">
        <ul class="tab-detail-wrap-a">
            <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
            <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
            </li>
            <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
            <div class="line" :class="liindex === 1 ? 'active' : ''"></div>热门城市
            </li>
            <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
            <div class="line" :class="liindex === 2 ? 'active' : ''"></div>ABCDE
            </li>
            <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
            <div class="line" :class="liindex === 3 ? 'active' : ''"></div>FGHIJ
            </li>
            <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
            <div class="line" :class="liindex === 4 ? 'active' : ''"></div>KLMN
            </li>
            <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
            <div class="line" :class="liindex === 5 ? 'active' : ''"></div>OPQR
            </li>
            <li :class="liindex === 6 ? 'active' : ''" @click="clickHandler(6)">
            <div class="line" :class="liindex === 6 ? 'active' : ''"></div>STUV
            </li>
            <li :class="liindex === 7 ? 'active' : ''" @click="clickHandler(7)">
            <div class="line" :class="liindex === 7 ? 'active' : ''"></div>WXYZ
            </li>
        </ul>

        <div class="shadow"></div>
        </div>
        <div class="tab-detail-wrap" :class="index === 2 ? 'active' : ''">
        <ul class="tab-detail-wrap-a">
            <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
            <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
            </li>
            <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
            <div class="line" :class="liindex === 1 ? 'active' : ''"></div>50-100
            </li>
            <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
            <div class="line" :class="liindex === 2 ? 'active' : ''"></div>100-150
            </li>
            <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
            <div class="line" :class="liindex === 3 ? 'active' : ''"></div>150-200
            </li>
            <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
            <div class="line" :class="liindex === 4 ? 'active' : ''"></div>200-250
            </li>
            <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
            <div class="line" :class="liindex === 5 ? 'active' : ''"></div>250-300
            </li>
            <li :class="liindex === 6 ? 'active' : ''" @click="clickHandler(6)">
            <div class="line" :class="liindex === 6 ? 'active' : ''"></div>300以上
            </li>
        </ul>

        <div class="shadow"></div>
        </div>
        <div class="tab-detail-wrap" :class="index === 3 ? 'active' : ''">
        <ul class="tab-detail-wrap-a">
            <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
            <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
            </li>
            <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
            <div class="line" :class="liindex === 1 ? 'active' : ''"></div>大专
            </li>
            <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
            <div class="line" :class="liindex === 2 ? 'active' : ''"></div>本科
            </li>
            <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
            <div class="line" :class="liindex === 3 ? 'active' : ''"></div>硕士
            </li>
            <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
            <div class="line" :class="liindex === 4 ? 'active' : ''"></div>博士
            </li>
            <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
            <div class="line" :class="liindex === 5 ? 'active' : ''"></div>其他
            </li>
        </ul>

        <div class="shadow"></div>
        </div>
        <div class="tab-detail-wrap" :class="index === 7 ? 'active' : ''">
        <ul class="tab-detail-wrap-a">
            <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
            <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
            </li>
            <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
            <div class="line" :class="liindex === 1 ? 'active' : ''"></div>一天
            </li>
            <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
            <div class="line" :class="liindex === 2 ? 'active' : ''"></div>两天
            </li>
            <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
            <div class="line" :class="liindex === 3 ? 'active' : ''"></div>三天
            </li>
            <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
            <div class="line" :class="liindex === 4 ? 'active' : ''"></div>四天
            </li>
            <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
            <div class="line" :class="liindex === 5 ? 'active' : ''"></div>五天
            </li>
            <li :class="liindex === 6 ? 'active' : ''" @click="clickHandler(6)">
            <div class="line" :class="liindex === 6 ? 'active' : ''"></div>六天
            </li>
            <li :class="liindex === 7 ? 'active' : ''" @click="clickHandler(7)">
            <div class="line" :class="liindex === 7 ? 'active' : ''"></div>七天
            </li>
        </ul>

        <div class="shadow"></div>
        </div>
        <div class="tab-detail-wrap" :class="index === 8 ? 'active' : ''">
        <ul class="tab-detail-wrap-a">
            <li :class="liindex === 0 ? 'active' : ''" @click="clickHandler(0)">
            <div class="line" :class="liindex === 0 ? 'active' : ''"></div>不限
            </li>
            <li :class="liindex === 1 ? 'active' : ''" @click="clickHandler(1)">
            <div class="line" :class="liindex === 1 ? 'active' : ''"></div>一月
            </li>
            <li :class="liindex === 2 ? 'active' : ''" @click="clickHandler(2)">
            <div class="line" :class="liindex === 2 ? 'active' : ''"></div>二月
            </li>
            <li :class="liindex === 3 ? 'active' : ''" @click="clickHandler(3)">
            <div class="line" :class="liindex === 3 ? 'active' : ''"></div>三月
            </li>
            <li :class="liindex === 4 ? 'active' : ''" @click="clickHandler(4)">
            <div class="line" :class="liindex === 4 ? 'active' : ''"></div>四月
            </li>
            <li :class="liindex === 5 ? 'active' : ''" @click="clickHandler(5)">
            <div class="line" :class="liindex === 5 ? 'active' : ''"></div>五月及以上
            </li>
        </ul>

        <div class="shadow"></div>
        </div>
  </div>


 </div>
</template>

<script>
 export default {
   data () {
     return {
         index:4,
         ulshow:true,
         liindex: 0,
     }
   },
   components: {

   },
      methods :{
       liClickHandler(index){
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
       },
        indexHandler(index) {
        if (this.index === index) {
            this.index = 5
        }
        this.index = index //第几个被点击
    
        },
        clickHandler(index) {
        this.liindex = index
        },
   }
 }
</script>

<style lang="stylus" scoped>
@import '~@/assets/border.styl';
.totalHeader-container
    width 100%
    height .49rem 
    display flex
    flex-direction column 
    position relative
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

.nav-inside
  height 100%
  .tab-detail-wrap 
    display flex
    flex-direction column
    position absolute
    top 0.495rem
    height 6.66rem
    width 100%
    z-index -999
    transition all 1s
    opacity 0

    &.active 
      opacity 1
      z-index 999
    

    .shadow 
      height 5.24rem
      background rgba(0, 0, 0, 0.8)
      z-index 999
      width 100%

    .tab-detail-wrap-a
      background #fff
      display flex
      flex-direction column
      justify-content space-between

      li 
        padding-left 0.19rem
        width 100%
        font-size 0.15rem
        line-height 0.44rem
        color #666
        background #F5F5F5
        border-bottom 1px solid #eaeaea
        display flex
        align-items center

        .line 
          height 0.24rem
          width 0.03rem
          background #02a0e9
          transition all 0.5s
          margin-right 0.19rem
          margin-left -0.19rem
          display none

          &.active 
            display block
          
        

        &.active 
          background #ffffff    
</style>
