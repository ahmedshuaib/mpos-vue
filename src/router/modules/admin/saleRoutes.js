import AllSales from "@/views/admin/pages/AllSales.vue";
import DiscountSale from "@/views/admin/pages/DiscountSale.vue";
import AddSale from "@/views/admin/pages/AddSale.vue";
import ListPose from "@/views/admin/pages/ListPose.vue";
import ListDraft from "@/views/admin/pages/ListDraft.vue";
import ListQuotations from "@/views/admin/pages/ListQuotations.vue";
import SellReturn from "@/views/admin/pages/SellReturn.vue";
import StockAdjustment from "@/views/admin/pages/StockAdjustment.vue";
import AddStockAdjustment from "@/views/admin/pages/AddStockAdjustment.vue";
import Expenses from "@/views/admin/pages/Expenses.vue";
import ExpenseCategory from "@/views/admin/pages/ExpenseCategory.vue";


export default [
        {
            path:'all-sales',
            name:'all-sales',
            component: () =>
                import(
                    /* webpackChunkName: all-sales */
                    "@/views/admin/pages/AllSales.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'discount-sales',
            name:'discount-sales',
            component: () =>
                import(
                    /* webpackChunkName: discount-sales */
                    "@/views/admin/pages/DiscountSale.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'add-sales',
            name:'add-sales',
            component: () =>
                import(
                    /* webpackChunkName: add-sales */
                    "@/views/admin/pages/AddSale.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'list-pose',
            name:'list-pose',
            component: () =>
                import(
                    /* webpackChunkName: list-pose */
                    "@/views/admin/pages/ListPose.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'list-draft',
            name:'list-draft',
            component: () =>
                import(
                    /* webpackChunkName: list-draft */
                    "@/views/admin/pages/ListDraft.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'list-quotations',
            name:'list-quotations',
            component: () =>
                import(
                    /* webpackChunkName: list-quotations */
                    "@/views/admin/pages/ListQuotations.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'sell-return',
            name:'sell-return',
            component: () =>
                import(
                    /* webpackChunkName: sell-return */
                    "@/views/admin/pages/SellReturn.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'stock-adjust',
            name:'stock-adjust',
            component: () =>
                import(
                    /* webpackChunkName: stock-adjust */
                    "@/views/admin/pages/StockAdjustment.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'add-stock',
            name:'add-stock',
            component: () =>
                import(
                    /* webpackChunkName: add-stock */
                    "@/views/admin/pages/AddStockAdjustment.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'expenses',
            name:'expenses',
            component: () =>
                import(
                    /* webpackChunkName: expenses */
                    "@/views/admin/pages/Expenses.vue"
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
                    /* webpackChunkName: expenses-category */
                    "@/views/admin/pages/ExpenseCategory.vue"
                ),
            meta: {
                isProtected: true
            },
        },
]