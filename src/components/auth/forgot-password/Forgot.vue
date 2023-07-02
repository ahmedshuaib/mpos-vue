<template>
    <div class="verification-section">
        <div class="col-lg-5">
            <div class="card m-auto" style="width: 28rem;">
                <div class="card-body">
                    <img src="../../../assets/img/password.svg" alt="pass" class="text-center">
                    <h4 class="forgot-pass">Forgot password</h4>
                    <span class="instruction">
                        No worries,we'll send you reset instruction
                    </span>
                </div>
                <div class="card-footer">
                    <form>
                        <div class="mb-1">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
                        </div>
                        <div class="login-btn">
                            <button class="btn">Reset Password</button>
                        </div>
                        <div class="mt-4 text-center">
                            <router-link :to="{name:'login'}" class="back">
                                <img src="../../assets/img/back.svg" alt="back">
                                <span>Back to log in</span>
                            </router-link>
                        </div>
                    </form>
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