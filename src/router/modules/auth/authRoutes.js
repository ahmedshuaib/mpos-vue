import Login from "@/components/auth/Login.vue";
import Signup from "@/views/admin/Signup.vue";
import Verification from "@/components/auth/forgot-password/Verification.vue";
import Forgot from "@/components/auth/forgot-password/Forgot.vue";
import Mail from "@/components/auth/forgot-password/Mail.vue";
import Reset from "@/components/auth/forgot-password/Reset.vue";
import SuccessReset from "@/components/auth/forgot-password/SuccessReset.vue";
import EmailVerify from "@/components/auth/email-verification/EmailVerify.vue";
import CodeVerify from "@/components/auth/email-verification/Codeverify.vue";
import Verified from "@/components/auth/email-verification/Verified.vue";
export default [
    // login-pages
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "signup",
        component: Signup,
    },
    // forgot-password-paths
    {
        path: "/verification",
        name: "verification",
        component: Verification,
    },
    {
        path: "/password/reset/",
        name: "forgot-password",
        component: Forgot,
    },
    {
        path: "/password/mail",
        name: "mail",
        component: Mail,
    },
    {
        path: "/password/new-password",
        name: "new-password",
        component: Reset,
    },
    {
        path: "/password/success-password",
        name: "reset-success",
        component: SuccessReset,
    },
    // forgot-password-paths-end

    // email-verification-paths
    {
        path: "/email/verification",
        name: "email-verify",
        component: EmailVerify,
    },
    {
        path: "/email/verify-code",
        name: "verify-code",
        component: CodeVerify,
    },
    {
        path: "/email/success-verify",
        name: "verify-success",
        component: Verified,
    },
    // email-verification-paths-end
];
