export default [
    // login-pages
    {
        path: "/login",
        name: "login",
        // component: () =>
        //     import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
    },
    {
        path: "/register",
        name: "signup",
        // component: () =>
        //     import(/* webpackChunkName: "signup" */ "@/views/Signup.vue"),
    },
    // forgot-password-paths
    {
        path: "/verification",
        name: "verification",
        // component: () =>
        //     import(
        //         /* webpackChunkName: "verification" */ "@/auth/forgot-password/Verification.vue"
        //     ),
    },
    {
        path: "/password/reset/",
        name: "forgot-password",
        // component: () =>
        //     import(
        //         /* webpackChunkName: "forgot-password" */ "@/auth/forgot-password/Forgot.vue"
        //     ),
    },
    {
        path: "/password/mail",
        name: "mail",
        // component: () =>
        //     import(
        //         /* webpackChunkName: "mail" */ "@/auth/forgot-password/Mail.vue"
        //     ),
    },
    {
        path: "/password/new-password",
        name: "new-password",
        // component: () =>
        //     import(
        //         /* webpackChunkName: "newpassword" */ "@/auth/forgot-password/Reset.vue"
        //     ),
    },
    {
        path: "/password/success-password",
        name: "reset-sucess",
        // component: () =>
        //     import(
        //         /* webpackChunkName: "reset-sucess" */ "@/auth/forgot-password/Successreset.vue"
        //     ),
    },
    // forgot-password-paths-end

    // email-verification-paths
    {
        path: "/email/verification",
        name: "email-verify",
        // component: () =>
        //     import(
        //         /* webpackChunkName: "forgotPassword" */ "@/auth/email-verification/Emailverify.vue"
        //     ),
    },
    {
        path: "/email/verifycode",
        name: "verify-code",
        // component: () =>
        //     import(
        //         /* webpackChunkName: "forgotPassword" */ "@/auth/email-verification/Codeverify.vue"
        //     ),
    },
    {
        path: "/email/success-verify",
        name: "verify-success",
        // component: () =>
        //     import(
        //         /* webpackChunkName: "forgotPassword" */ "@/auth/email-verification/Verified.vue"
        //     ),
    },
    // email-verification-paths-end
];
