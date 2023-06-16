<template>
    <div class="verification-section">
        <div class="col-lg-5">
            <div class="card m-auto" style="width: 28rem;">
                <div class="card-body">
                    <img src="../../assets/img/password.svg" alt="pass" class="text-center">
                    <h4 class="forgot-pass">Set new password</h4>
                    <span class="instruction">
                        Your new password must be diffrent to previous used passwords
                    </span>
                </div>
                <div class="card-footer">
                    <div class="mb-4">
                        <label for="password" class="form-label">New Password</label>
                        <input type="password" class="form-control" id="email" aria-describedby="passwordHelp" placeholder="Enter new password">
                    </div>
                    <div class="mb-1">
                        <label for="password" class="form-label">Confirm-Password</label>
                        <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" placeholder="Confirm new password">
                    </div>
                    <div class="login-btn">
                        <button class="btn">Reset Password</button>
                    </div>
                    <div class=" text-center mt-4">
                        <router-link :to="{name:'login'}" class="back">
                            <img src="../../assets/img/back.svg" alt="back">
                            <span>Back to log in</span>
                        </router-link>
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