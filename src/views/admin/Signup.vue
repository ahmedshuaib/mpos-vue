<template>
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
                        <img src="../assets/img/goggle.svg" alt="google">
                        <span>Sign up with Goggle</span>
                    </button>
                </div>
                <div class="last-text">
                    <div class="lines email-lines"></div>
                    <p class="last-texts">Or continue with email</p>
                    <div class="lines email-lines"></div>
                </div>
                <div class="mb-4">
                    <label for="Name" class="form-label">Name*</label>
                    <input type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter your name">
                </div>
                <div class="mb-4">
                    <label for="email" class="form-label">Email*</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email" v-model="user_form.email">
                    <span class="error" v-if="errors.email">{{ errors.email }}</span>

                </div>
                <div class="mb-4">
                    <label for="password" class="form-label">Password*</label>
                    <input type="password" class="form-control" id="password" placeholder="password" v-model="user_form.password">
                    <span class="error" v-if="errors.password">{{ errors.password }}</span>

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
            <div class="create-account">
                <span>Already have an account? <a href="#" class="account">Lognin</a></span>
            </div>
         </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            user_form:{},
            errors:{}
        }
    },
    methods: {
        google(e){
            e.preventDefault();
        },
    validateEmail() {
        if (!this.isValidEmail(this.user_form.email)) {
            this.errors.email = 'Please enter a valid email.';
        } 
        else {
            delete this.errors.email;
        }
    },
    validatePassword() {
        if (!this.user_form.password) {
            this.errors.password = 'Please enter a password.';
        } else if (this.user_form.password.length < 6) {
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
            // Form validation passed, you can proceed with form submission or other actions.
            // For example:
            console.log('Form submitted successfully!');
        }

    }
    
},
}
</script>

<style>

</style>