import Bank from "@/views/admin/pages/Bank.vue";
import Personal from "@/views/admin/pages/Personal.vue";
import MainPoint from "@/views/admin/pages/MainPoint.vue";


export default [
        {
            path:'bank',
            name:'bank',
            component: () =>
                import(
                    /* webpackChunkName: bank */
                    "@/views/admin/pages/Bank.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'personal',
            name:'personal',
            component: () =>
                import(
                    /* webpackChunkName: personal */
                    "@/views/admin/pages/Personal.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'main-point',
            name:'main-point',
            component: () =>
                import(
                    /* webpackChunkName: main-point */
                    "@/views/admin/pages/MainPoint.vue"
                ),
            meta: {
                isProtected: true
            },
        },
]