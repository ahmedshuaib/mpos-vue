<template>
  <div
      v-if="isLoginFailed"
      style="border-radius: 10px"
      class="red white--text pa-2 ma-3 text-center app-title-small"
  >Registration failed! Invalid credentials
  </div>
    <div class="login-section mt-5 mb-5">
        <div class="container">
            <div class="col-lg-10 col-md-8 col-sm-12 m-auto ">
            <div class="form-header">
                <h1>Sign up</h1>
                <h6>Start your 30-days free trial.</h6>
            </div>
            <form @submit.prevent="validateForm">
                <div class="google-account">
                    <button class="btn" @click="google">
                        <img src="../../assets/img/goggle.svg" alt="google">
                        <span>Sign up with Goggle</span>
                    </button>
                </div>
                <div class="last-text">
                    <div class="lines email-lines"></div>
                    <p class="last-texts">Or continue with email</p>
                    <div class="lines email-lines"></div>
                </div>
                <div class="mb-4">
                    <label for="Name" class="form-label">First Name*</label>
                    <input type="text" class="form-control" id="first_name"  v-model="first_name" aria-describedby="nameHelp" placeholder="Enter your first name" @keyup.enter="onRegister">
                </div>
                <div class="mb-4">
                  <label for="Name" class="form-label">Last Name*</label>
                  <input type="text" class="form-control" id="last_name" v-model="last_name" aria-describedby="nameHelp" placeholder="Enter your last name"
                  @keyup.enter="onRegister">
                </div>
                <div class="mb-4">
                    <label for="email" class="form-label">Email*</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" v-model="email" @keyup.enter="onRegister">
                    <span class="error" v-if="errors.email">{{ errors.email }}</span>

                </div>
                <div class="mb-4">
                    <label for="password" class="form-label">Password*</label>
                    <input type="password" class="form-control" id="password" placeholder="password" v-model="password" @keyup.enter="onRegister">
                    <span class="error" v-if="errors.password">{{ errors.password }}</span>

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
                <button type="submit" class="btn submit" :disabled="!form"
                        :loading="loading" @click="onRegister">Submit</button>
            </form>
            <div class="create-account">
                <span>Already have an account? <a @click="loginPage" class="account">Log in</a></span>
            </div>
         </div>
        </div>
    </div>
</template>

<script>

import AuthService from "@/services/AuthService";

export default {

    data: () => ({
    errors:{},
    form: true,
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    loading: false,
    isLoginFailed: false,
  }),
    mounted() {
      console.log("AUTH", AuthService.isAuthenticated());
    },
    methods: {
      loginPage()
      {
        this.$router.push({
          name: 'login'
        });
      },
      forgotPassPage(){
        this.$router.push({
          name: 'forgot-password'
        });
      },
      async onRegister() {
        // this.loading =true;
        console.log('first_name',this.first_name);
        if(!(await AuthService.register({first_name: this.first_name,last_name: this.last_name,email: this.email, password: this.password}))){
          console.log('first_name2',this.first_name);
          this.loading = true
        }
      },
      google(e){
            e.preventDefault();
        },
    validateEmail() {
        if (!this.isValidEmail(this.email)) {
            this.errors.email = 'Please enter a valid email.';
        }
        else {
            delete this.errors.email;
        }
    },
    validatePassword() {
        if (!this.password) {
            this.errors.password = 'Please enter a password.';
        } else if (this.password.length < 6) {
            this.errors.password = 'Password should be at least 6 characters long.';
        } else {
            delete this.errors.password;
        }
    },
    isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    },
    validateForm() {
        this.validateEmail();
        this.validatePassword();

        if (Object.keys(this.errors).length === 0) {
            // console.log('Form submitted successfully!');
        }

    }

},
}
</script>

<style scoped>
.account {
  cursor: pointer;
}
.forgot-link{
  cursor: pointer;
}

</style>