import BankUser from "@/views/admin/pages/BankUser.vue";
import AddBankUser from "@/components/admin/parts/bank/AddBankUser.vue";

export default [
        {
            path:'bank-user',
            name:'bank-user',
            component: () =>
                    import(
                    /* webpackChunkName: bank-user */
                        "@/views/admin/pages/BankUser.vue"
                    ),
            meta: {
                isProtected: true
            },
            children:[
                {
                    path:'add-bank-user',
                    name:'add-bank-user',
                    component: () =>
                        import(
                            /* webpackChunkName: add-bank-user */
                            "@/components/admin/parts/bank/AddBankUser.vue"
                            ),
                    meta: {
                        isProtected: true
                    },

                }
            ]
        },
]