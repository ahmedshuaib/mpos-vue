<template>
    <div class="login-section">
        <div class="container">
            <div class="col-lg-10 col-md-8 col-sm-12 m-auto ">
              <div
                  v-if="isLoginFailed"
                  style="border-radius: 10px"
                  class="red white--text pa-2 ma-3 text-center app-title-small"
              >Login failed! Invalid credentials
              </div>
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
                    <input type="email" class="form-control" id="email"  v-model="email" aria-describedby="emailHelp" placeholder="Enter your email">
                </div>
                <div class="mb-4">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password"  v-model="password" placeholder="password">
                </div>
                <div class="login-footer">
                    <div class="mb-3 form-check" style="vertical-align: center;">
                        <input type="checkbox" class="form-check-input" id="check">
                        <label class="form-check-label" for="check">Remember for 30 days</label>
                    </div>
                    <div class="forgot-link">
                        <a @click="forgotPassPage">Forgot password</a>
                    </div>
                </div>

                <button :disabled="!form"
                        :loading="loading" type="submit" class="btn submit" @click="onLogin">Submit</button>
            </form>
            <div class="create-account text-center">
                <span>Don't have an account? <a @click="registerPage" class="account">Create an Account</a></span>
            </div>
         </div>
        </div>
    </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  data: () => ({
    form: true,
    email: null,
    password: null,
    loading: false,
    isLoginFailed: false,
  }),
  mounted() {
    console.log("AUTH", AuthService.isAuthenticated());
  },

  methods: {
    registerPage(){
      this.$router.push({
        name: 'signup'
      });
    },
    forgotPassPage(){
      this.$router.push({
        name: 'forgot-password'
      });
    },
    async onLogin(event) {
      event.preventDefault();
      // this.isLoginFailed = false;
      // this.loading =true;
      console.log('email 1');
      if(!(await AuthService.login({email: this.email, password: this.password}))){
        console.log('email 2',this.email);
        this.loading = true
      }
    },
  }

}
</script>


<style scoped>
.account{
  cursor: pointer;
}
.forgot-link{
  cursor: pointer;
}
</style>