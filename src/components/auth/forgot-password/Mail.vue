<template>
    <div class="verification-section">
        <div class="col-lg-5">
            <div class="card m-auto" style="width: 28rem;">
                <div class="card-body verify-card">
                    <img src="../../../assets/img/email.svg" alt="mail">
                    <h4>Check your email</h4>
                    <span class="s1-pass">
                        We sent a password reset link to 
                        <span class="email-text text-bold">olivia@untitledui.com</span>
                    </span>
                    <div class="login-btn">
                        <button class="btn">Open email app</button>
                    </div>
                    <div class="card-footer mt-4">
                        <div class="resend text-center">
                             <span>Didn't recive the email <a href="#" class="resend-link">Click to resend</a></span>
                        </div>
                        <div class="text-center mt-3">
                            <router-link :to="{name:'login'}" class="back">
                                <img src="../../../assets/img/back.svg" alt="back">
                                <span>Back to log in</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>