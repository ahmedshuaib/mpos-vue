import Reports from "@/views/Reports.vue";
import NetBalance from "@/views/NetBalance.vue";
import SupplierPosition from "@/views/SupplierPosition.vue";
import SupplierSummery from "@/views/SupplierSummery.vue";
import SupplierReport from "@/views/SupplierReport.vue";
import StockPosition from "@/views/StockPosition.vue";
import StockReceipts from "@/views/StockReceipts.vue";
import PurchaseSale from "@/views/PurchaseSale.vue";
import TransferReport from "@/views/TransferReport.vue";
import TransactionReport from "@/views/TransactionReport.vue";


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