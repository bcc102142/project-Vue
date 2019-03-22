<template>
 <div class="register-container">
     <div class="register-container-box">
        <h2 class="title">注册实习曾</h2>
        
        <div class="form-box">
            <div class="form-box1">
                <div class="input-item">
                    <input type="text" placeholder="请输入手机号">
                </div>
                <div class="input-item">
                    <input type="password" placeholder="请输入短信验证码">
                </div>
                 <div class="input-item">
                    <input type="password" placeholder="设置密码">
                </div>
            </div>
        </div>

        <div class="login-button">注册</div>
        <div class="other-login">
            <div>
              注册即代表同意 
              <a href="https://www.shixiseng.com/rule">《实习僧用户协议》</a>
            </div>
        </div>
        <router-link tag="div" to="/home/mine" class="go-register" >
            <a href="#">立即登陆</a>
        </router-link>
     </div>
     
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
@import '~@/assets/border.styl'
.register-container
    width: 100%
    height 100%
    min-height 100%
    background-image url('https://sxsimg.xiaoyuanzhao.com/static/sxs-wap/img/w-reg-bg.png')
    background-position center
    background-size cover
    background-repeat no-repeat
    line-height 1
    .register-container-box
        padding  .5rem .25rem 0 .25rem
        height 5.32rem
        width 100%
        .go-register
            height .16rem
            margin-top .6rem
            text-align center
            a    
                color #699AFF
                font-weight 500
                font-size .16rem
        .other-login
            height .128rem
            font-size .13rem
            text-align center
            margin-top .145rem
            color #cccccc
        .login-button
            height .475rem
            width 100%
            line-height .475rem
            text-align center
            font-size .16rem
            font-weight 500
            color #fff
            background-color #699AFF
            border-radius .24rem
        .form-box
            height 2.1rem
            margin-top .1rem 
            .form-box2
                height 1.215rem
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
                height 1.215rem
                .forget-password
                    margin-top .075rem
                    height .14rem
                    a 
                        float right
                        color: #699AFF
                        font-size: .14rem
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
            color #000
            font-size .25rem
            font-weight 500




</style>
