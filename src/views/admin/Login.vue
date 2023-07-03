<template>
    <div class="login-section">
        <div class="container">
            <div class="col-lg-10 col-md-8 col-sm-12 m-auto ">
            <div class="form-header">
                <h1>Log in</h1>
                <h6>Welcome back! Please enter your details</h6>
            </div>
            <form>
                <div class="google-account">
                    <button class="btn">
                        <img src="../../assets/img/goggle.svg" alt="google">
                        <span>Sign in with Goggle</span>
                    </button>
                </div>
                <div class="last-text">
                    <div class="lines email-lines"></div>
                    <p class="last-texts">Or continue with email</p>
                    <div class="lines email-lines"></div>
                </div>
                <div class="mb-4">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email">
                </div>
                <div class="mb-4">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="password">
                </div>
                <div class="login-footer">
                    <div class="mb-3 form-check" style="vertical-align: center;">
                        <input type="checkbox" class="form-check-input" id="check">
                        <label class="form-check-label" for="check">Remember for 30 days</label>
                    </div>
                    <div class="forgot-link">
                        <a href="#">Forgot password</a>
                    </div>
                </div>

                <button type="submit" class="btn submit">Submit</button>
            </form>
            <div class="create-account text-center">
                <span>Don't have an acocunt? <a href="#" class="account">Create an Account</a></span>
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