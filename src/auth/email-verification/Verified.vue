<template>
    <div class="verification-section">
        <div class="col-lg-5">
            <div class="card m-auto" style="width: 28rem;">
                <div class="card-body verify-card">
                    <img src="../../assets/img/email.svg" alt="mail">
                    <h4>Email verified</h4>
                    <span class="s1-pass">
                        Your password has been successfully reset.
                        click below to long in magically
                    </span>
                    <div class="login-btn">
                        <button class="btn">Continue</button>
                    </div>
                    <div class="card-footer">
                        <div class="text-center mt-4">
                            <router-link :to="{name:'login'}" class="back">
                                <img src="../../assets/img/back.svg" alt="back">
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