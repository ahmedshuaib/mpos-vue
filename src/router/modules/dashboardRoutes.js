import editmodal from '@/components/user/Edit.vue';
import usermodal from '@/components/user/Usermodal.vue';
export default[
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
    },
    {
        path: "/user",
        name: "user",
        component: () => import(/* webpackChunkName: "User" */ "@/views/User.vue"),
        children:[
            {
                path: "usermodal",
                name: "usermodal",
                components:{
                    default:usermodal,
                    usermodal:usermodal
                }
            },
            {
                path: "edit/:id",
                name: "edit",
                components:{
                    default:editmodal,
                    edited:editmodal
                }
            },
        ]
    },
    {
        path: "/role",
        name: "role",
        component: () => import(/* webpackChunkName: "Role" */ "@/views/Role.vue"),
    },
    {
        path:'/addrole',
        name:'addrole',
        component:()=>import(/* webpackChunkName: "Addrole" */ "@/views/Addrole.vue"),
    },
    {
        path: "/sales",
        name: "sales",
        component: () => import(/* webpackChunkName: "sales" */ "@/views/Sales.vue"),
        children:[
            {
                path: "salesmodal",
                name: "salesmodal",
                component: () => import(/* webpackChunkName: "salesmodal" */ "@/components/sales/Salesmodal.vue"),
            },
            
        ]
    },
    {
        path:'/suppliers',
        name:'suppliers',
        component: () => import(/* webpackChunkName: "suppliers" */ "@/views/Suppliers.vue"),
        children:[
            {
                path: "addcustomer",
                name: "addcustomer",
                component: () => import(/* webpackChunkName: "addcustomer" */ "@/components/contacts/suppliers/Suppliersmodal.vue"),
            },
            
        ]
    },
    {
        path:'/customers',
        name:'customers',
        component: () => import(/* webpackChunkName: "customers" */ "@/views/Customers.vue"),
        children:[
            {
                path:'newcustomers',
                name:'new-customers',
                component:() => import(/* webpackChunkName: "newcustomers"*/ "@/components/contacts/customers/Newcustomer.vue")
            }
        ]
    },
    {
        path:'/customergroup',
        name:'customer-group',
        component:() => import(/* webpackChunkName: "customergroup"*/ "@/views/Customergroup.vue"),
        children:[
            {
                path:'addgroup',
                name:'add-group',
                component:() => import(/* webpackChunkName: "newcustomers"*/ "@/components/contacts/customergroup/Addgroups.vue")
            }
        ]
    },
    {
        path:'/customerpay',
        name:'customer-pay',
        component: () => import(/* webpackChunkName: "customerpayable" */ "@/views/Customerpay.vue"),
    },

    // login-pages
    {
        path:'/login',
        name:'login',
        component: () => import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
    },
    {
        path:'/signup',
        name:'signup',
        component: () => import(/* webpackChunkName: "signup" */ "@/views/Signup.vue"),
    },
    // forgot-password-paths
    {
        path:'/verification',
        name:'verification',
        component: () => import(/* webpackChunkName: "verification" */ "@/auth/forgot-password/Verification.vue"),
    },
    {
        path:'/password/reset/',
        name:'forgot-password',
        component: () => import(/* webpackChunkName: "forgot-password" */ "@/auth/forgot-password/Forgot.vue"),
    },
    {
        path:'/password/mail',
        name:'mail',
        component: () => import(/* webpackChunkName: "mail" */ "@/auth/forgot-password/Mail.vue"),
    },
    {
        path: "/password/new-password",
        name: "new-password",
        component: () =>
            import(/* webpackChunkName: "newpassword" */ "@/auth/forgot-password/Reset.vue"),
    },
    {
        path: "/password/success-password",
        name: "reset-sucess",
        component: () =>
            import(/* webpackChunkName: "reset-sucess" */ "@/auth/forgot-password/Successreset.vue"),
    },
    // forgot-password-paths-end

    // email-verification-paths
    {
        path: "/email/verification",
        name: "email-verify",
        component: () =>
            import(/* webpackChunkName: "forgotPassword" */ "@/auth/email-verification/Emailverify.vue"),
    },
    {
        path: "/email/verifycode",
        name: "verify-code",
        component: () =>
            import(/* webpackChunkName: "forgotPassword" */ "@/auth/email-verification/Codeverify.vue"),
    },
    {
        path: "/email/success-verify",
        name: "verify-success",
        component: () =>
            import(/* webpackChunkName: "forgotPassword" */ "@/auth/email-verification/Verified.vue"),
    },
    // email-verification-paths-end
]
