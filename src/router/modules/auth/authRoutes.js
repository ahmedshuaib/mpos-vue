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
        component: () =>
            import(
                /* webpackChunkName: login */ "@/components/auth/Login.vue"
            ),
    },
    {
        path: "/register",
        name: "signup",
        component: () =>
            import(
                /* webpackChunkName: signup */ "@/views/admin/Signup.vue"
            ),
    },
    // forgot-password-paths
    {
        path: "/verification",
        name: "verification",
        component: () =>
            import(
                /* webpackChunkName: verification */ "@/components/auth/forgot-password/Verification.vue"
            ),
    },
    {
        path: "/password/reset/",
        name: "forgot-password",
        component: () =>
            import(
                /* webpackChunkName: forgot-password */ "@/components/auth/forgot-password/Forgot.vue"
            ),
    },
    {
        path: "/password/mail",
        name: "mail",
        component: () =>
            import(
                /* webpackChunkName: mail */ "@/components/auth/forgot-password/Mail.vue"
            ),
    },
    {
        path: "/password/new-password",
        name: "new-password",
        component: () =>
            import(
                /* webpackChunkName: new-password */ "@/components/auth/forgot-password/Reset.vue"
            ),
    },
    {
        path: "/password/success-password",
        name: "reset-success",
        component: () =>
            import(
                /* webpackChunkName: reset-success */ "@/components/auth/forgot-password/SuccessReset.vue"
            ),
    },
    // forgot-password-paths-end

    // email-verification-paths
    {
        path: "/email/verification",
        name: "email-verify",
        component: () =>
            import(
                /* webpackChunkName: email-verify */ "@/components/auth/email-verification/EmailVerify.vue"
            ),
    },
    {
        path: "/email/verify-code",
        name: "verify-code",
        component: () =>
            import(
                /* webpackChunkName: verify-code */ "@/components/auth/email-verification/Codeverify.vue"
            ),
    },
    {
        path: "/email/success-verify",
        name: "verify-success",
        component: () =>
            import(
                /* webpackChunkName: verify-success */ "@/components/auth/email-verification/Verified.vue"
            ),
    },
    // email-verification-paths-end
];
