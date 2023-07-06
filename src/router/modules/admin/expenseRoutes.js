import Expenses from "@/views/admin/pages/Expenses.vue";
import ExpenseCategory from "@/views/admin/pages/ExpenseCategory.vue";

export default [

        {
            path:'expenses',
            name:'expenses',
            component: () =>
                import(
                    /* webpackChunkName: expenses */ "@/views/admin/pages/Expenses.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'expenses-category',
            name:'expenses-category',
            component: () =>
                import(
                    /* webpackChunkName: expenses-category */ "@/views/admin/pages/ExpenseCategory.vue"
                ),
            meta: {
                isProtected: true
            },
        },
]