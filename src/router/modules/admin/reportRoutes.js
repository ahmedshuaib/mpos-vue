import Reports from "@/views/admin/pages/Reports.vue";
import NetBalance from "@/views/admin/pages/NetBalance.vue";
import SupplierPosition from "@/views/admin/pages/SupplierPosition.vue";
import SupplierSummery from "@/views/admin/pages/SupplierSummery.vue";
import SupplierReport from "@/views/admin/pages/SupplierReport.vue";
import StockPosition from "@/views/admin/pages/StockPosition.vue";
import StockReceipts from "@/views/admin/pages/StockReceipts.vue";
import PurchaseSale from "@/views/admin/pages/PurchaseSale.vue";
import TransferReport from "@/views/admin/pages/TransferReport.vue";
import TransactionReport from "@/views/admin/pages/TransactionReport.vue";


export default [
        {
            path:'reports',
            name:'reports',
            component: () =>
                import(
                    /* webpackChunkName: reports */
                    "@/views/admin/pages/Reports.vue"
                ),
        },

        {
            path:'net-balance',
            name:'net-balance',
            component: () =>
                import(
                    /* webpackChunkName: net-balance */
                    "@/views/admin/pages/NetBalance.vue"
                ),
        },
        {
            path:'supplier-position',
            name:'supplier-position',
            component: () =>
                import(
                    /* webpackChunkName: supplier-position */ "@/views/admin/pages/SupplierPosition.vue"
                ),
        },
        {
            path:'supplier-summery',
            name:'supplier-summery',
            component: () =>
                import(
                    /* webpackChunkName: supplier-summery */ "@/views/admin/pages/SupplierSummery.vue"
                    ),
        },
        {
            path:'supplier-report',
            name:'supplier-report',
            component: () =>
                import(
                    /* webpackChunkName: supplier-report */
                    "@/views/admin/pages/SupplierReport.vue"
                    ),
        },

        {
            path:'stock-position',
            name:'stock-position',
            component: () =>
                import(
                    /* webpackChunkName: stock-position */
                    "@/views/admin/pages/StockPosition.vue"
                    ),
        },
        {
            path:'stock-receipts',
            name:'stock-receipts',
            component: () =>
                import(
                    /* webpackChunkName: stock-receipts */
                    "@/views/admin/pages/StockReceipts.vue"
                    ),
        },
        {
            path:'purchase-sale',
            name:'purchase-sale',
            component: () =>
                import(
                    /* webpackChunkName: purchase-sale */
                    "@/views/admin/pages/PurchaseSale.vue"
                    ),
        },

        {
            path:'transfer-report',
            name:'transfer-report',
            component: () =>
                import(
                    /* webpackChunkName: transfer-report */
                    "@/views/admin/pages/TransferReport.vue"
                    ),
        },
        {
            path:'transaction-report',
            name:'transaction-report',
            component: () =>
                import(
                    /* webpackChunkName: transaction-report */
                    "@/views/admin/pages/TransactionReport.vue"
                    ),
        },
]