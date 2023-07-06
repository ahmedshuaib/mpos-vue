import ReceiveBalance from "@/views/admin/pages/ReceiveBalance.vue";
import ReceivePersonal from "@/views/admin/pages/ReceivePersonal.vue";

export default [
    {
        path: 'receive-balance',
        name: 'receive-balance',
        component: () =>
            import(
                /* webpackChunkName: purchase-return */ "@/views/admin/pages/ReceiveBalance.vue"
            ),
        meta: {
            isProtected: true
        },
    },
    {
        path: 'receive-personal',
        name: 'receive-personal',
        component: () =>
            import(
                /* webpackChunkName: purchase-return */ "@/views/admin/pages/ReceivePersonal.vue"
            ),
        meta: {
            isProtected: true
        },
    },
]