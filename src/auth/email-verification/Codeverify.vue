<template>
    <div class="verification-section">
        <div class="col-lg-5">
            <div class="card m-auto" style="width: 28rem;">
                <div class="card-body verify-card">
                    <img src="../../assets/img/email.svg" alt="mail">
                    <h4>Check your email</h4>
                    <span class="s1-pass">
                        We sent a password reset link to
                        <span class="email-text text-bold">olivia@untitledui.com</span>
                    </span>
                    <div class="code-container mt-4">
                        <input type="number" class="code" min="0" max="4" >
                        <input type="number" class="code" min="0" max="4" >
                        <input type="number" class="code" min="0" max="4" >
                        <input type="number" class="code" min="0" max="4" >
                    </div>
                    <div class="login-btn">
                        <button class="btn">Verify email</button>
                    </div>
                    <div class="card-footer mt-4">
                        <div class="resend text-center">
                             <span>Didn't recive the email <a href="#" class="resend-link" style="color: #229269;">Click to resend</a></span>
                        </div>
                        <div class="text-center mt-3">
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
    mounted(){
const codeInputs = document.querySelectorAll('.code');

codeInputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        const inputValue = input.value;

        // Remove any non-digit characters
        const sanitizedValue = inputValue.replace(/\D/g, '');

        if (sanitizedValue.length > 1) {
            // If more than one digit is entered, keep only the first digit
            input.value = sanitizedValue[0];
        }

        if (input.value.length === 1) {
            if (index < codeInputs.length - 1) {
                codeInputs[index + 1].focus();
            } else {
                // All code inputs are filled
                // Perform your verification logic here
            }
        } else if (input.value.length === 0) {
            if (index > 0) {
                codeInputs[index - 1].focus();
            }
        }
    });
});


    }
}
</script>

<style>

</style>