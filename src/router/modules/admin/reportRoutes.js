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
            component: Reports,
        },

        {
            path:'net-balance',
            name:'net-balance',
            component: NetBalance,
        },
        {
            path:'supplier-position',
            name:'supplier-position',
            component: SupplierPosition,
        },
        {
            path:'supplier-summery',
            name:'supplier-summery',
            component: SupplierSummery,
        },
        {
            path:'supplier-report',
            name:'supplier-report',
            component: SupplierReport,
        },

        {
            path:'stock-position',
            name:'stock-position',
            component: StockPosition,
        },
        {
            path:'stock-receipts',
            name:'stock-receipts',
            component: StockReceipts,
        },
        {
            path:'purchase-sale',
            name:'purchase-sale',
            component: PurchaseSale,
        },

        {
            path:'transfer-report',
            name:'transfer-report',
            component: TransferReport,
        },
        {
            path:'transaction-report',
            name:'transaction-report',
            component: TransactionReport,
        },
]