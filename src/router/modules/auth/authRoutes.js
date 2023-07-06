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
        meta: {
            isProtected: false
        }
    },
    {
        path: "/register",
        name: "signup",
        component: () =>
            import(
                /* webpackChunkName: signup */ "@/views/admin/Signup.vue"
            ),
        meta: {
            isProtected: false
        }
    },
    // forgot-password-paths
    {
        path: "/verification",
        name: "verification",
        component: () =>
            import(
                /* webpackChunkName: verification */ "@/components/auth/forgot-password/Verification.vue"
            ),
        meta: {
            isProtected: false
        }
    },
    {
        path: "/password/reset/",
        name: "forgot-password",
        component: () =>
            import(
                /* webpackChunkName: forgot-password */ "@/components/auth/forgot-password/Forgot.vue"
            ),
        meta: {
            isProtected: false
        }
    },
    {
        path: "/password/mail",
        name: "mail",
        component: () =>
            import(
                /* webpackChunkName: mail */ "@/components/auth/forgot-password/Mail.vue"
            ),
        meta: {
            isProtected: false
        }
    },
    {
        path: "/password/new-password",
        name: "new-password",
        component: () =>
            import(
                /* webpackChunkName: new-password */ "@/components/auth/forgot-password/Reset.vue"
            ),
        meta: {
            isProtected: false
        }
    },
    {
        path: "/password/success-password",
        name: "reset-success",
        component: () =>
            import(
                /* webpackChunkName: reset-success */ "@/components/auth/forgot-password/SuccessReset.vue"
            ),
        meta: {
            isProtected: false
        }
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
        meta: {
            isProtected: false
        }
    },
    {
        path: "/email/verify-code",
        name: "verify-code",
        component: () =>
            import(
                /* webpackChunkName: verify-code */ "@/components/auth/email-verification/Codeverify.vue"
            ),
        meta: {
            isProtected: false
        }
    },
    {
        path: "/email/success-verify",
        name: "verify-success",
        component: () =>
            import(
                /* webpackChunkName: verify-success */ "@/components/auth/email-verification/Verified.vue"
            ),
        meta: {
            isProtected: false
        }
    },
    // email-verification-paths-end
];
