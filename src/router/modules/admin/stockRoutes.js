import StockAdjustment from "@/views/admin/pages/StockAdjustment.vue";
import AddStockAdjustment from "@/views/admin/pages/AddStockAdjustment.vue";


export default [
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
]