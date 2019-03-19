<template>
 <div class="mine-container">
     <div class="mine-container-box">
        <h2 class="title">登陆实习曾</h2>
        <div class="change-box">
            <div :class="index === 0 ? 'actice' : ''" class="login-box" @click="clickHandler(0)">
                <p>密码登陆</p>
            </div>
            <div :class="index === 1 ? 'actice' : ''" class="register-box" @click="clickHandler(1)" >
                <p>验证码登陆</p>
            </div>
            <div class="line" :class="index === 1 ? 'actice' : ''"></div>
        </div>
        <div class="form-box">
            <div class="form-box1" :class="index === 1 ? 'actice' : ''">
                <div class="input-item">
                    <input type="text" placeholder="请输入手机号/邮箱">
                </div>
                <div class="input-item">
                    <input type="password" placeholder="请输入密码">
                </div>
                <div class="forget-password">
                    <a href="#">忘记密码?</a>
                </div>
            </div>
            <div class="form-box2 " :class="index === 0 ? 'actice' : ''" >
                <div class="input-item">
                    <input type="text" placeholder="请输入验证码">
                </div>
                <div class="input-item">
                    <input type="password" placeholder="请输入密码">
                </div>
                <div class="forget-password">
                    
                </div>
            </div>
        </div>

        <div class="login-button">立即登陆</div>
        <div class="other-login">
            <a class="wechat" href="#"></a>
            <a class="qq" href="#"></a>
            <a class="weibo" href="#"></a>
            <a class="alipay" href="#"></a>
        </div>
        <div class="go-register" >
            <a href="#">立即注册</a>
        </div>
     </div>
     
 </div>
</template>

<script>
 export default {
   data () {
     return {
         index:0
     }
   },
   components: {

   },
     methods:{
       clickHandler(index){
           this.index = index
           console.log(this.index)
       }
   },
 }
</script>
<style lang="stylus" scoped>
@import '~@/assets/border.styl'
.mine-container
    width: 100%
    height 100%
    min-height 100%
    background-image url('https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/w-login-bg.png')
    background-position: center
    background-size cover
    background-repeat no-repeat
    line-height 1
    .mine-container-box
        padding  .5rem .25rem 0 .25rem
        height 5.32rem
        width 100%
        .go-register
            height .16rem
            margin-top .3rem
            text-align center
            a    
                color: #699AFF;
                font-weight: 500;
                font-size: .16rem;
        .other-login
            height .3rem
            margin-top .3rem
            padding 0 .15rem
            display flex
            justify-content space-around
            a
                height .3rem
                width .3rem
                background-position: center
                background-size cover
                background-repeat no-repeat
            .wechat
                background-image url('https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/wap-login-wx.png')
            .qq
                background-image url('https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/wap-login-qq.png')
            .weibo
                background-image url('https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/wap-login-weibo.png')
            .alipay
                background-image url('https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/wap-login-zfb.png')
        .login-button
            height .475rem
            width: 100%;
            line-height: .475rem;
            text-align: center;
            font-size: .16rem;
            font-weight: 500;
            color: #fff;
            background-color: #699AFF;
            border-radius: .24rem;
        .form-box
            height 2.1rem
            margin-top .1rem 
            .form-box2
                &.actice
                    display none 
                height 1.215rem
                .forget-password
                    margin-top .075rem
                    height .14rem
                    a 
                        float right
                        color: #699AFF;
                        font-size: .14rem;
                .input-item
                    margin-top .19rem
                    height .405rem
                    border(0 0 1px 0)
                    input 
                        height 100%
                        width 100%
                        background-color transparent
                        font-size .14rem
                        color #616366
                        font-size .14rem
                        outline none
                        border-width 0
            .form-box1
                &.actice
                    display none
                height 1.215rem
                .forget-password
                    margin-top .075rem
                    height .14rem
                    a 
                        float right
                        color: #699AFF;
                        font-size: .14rem;
                .input-item
                    margin-top .19rem
                    height .405rem
                    border(0 0 1px 0)
                    input 
                        height 100%
                        width 100%
                        background-color transparent
                        font-size .14rem
                        color #616366
                        font-size .14rem
                        outline none
                        border-width 0
        
        
        
        
        
        
        
        
        
        h2
            color: #000;
            font-size: .25rem;
            font-weight: 500;
        .change-box
            height .408rem
            margin-top .34rem
            border(0 0 1px 0)
            .line
                width: .525rem;
                height: .025rem;
                position: absolute;
                bottom: -.01rem;
                left: .55rem;
                border-radius: .015rem;
                background-color: #699AFF;
                transition 1s all
                &.actice
                    left 2.17rem
            .register-box
                float left
                width 50%
                height 100%
                text-align center
                line-height .408rem
                color #595959
                font-size: .16rem
                &.actice
                    color #699AFF
            .login-box
                width 50%
                height 100%
                float left
                text-align center
                line-height .408rem
                color #595959
                font-size: .16rem
                &.actice
                    color #699AFF




</style>