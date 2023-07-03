import StockAdjustment from "@/views/admin/pages/StockAdjustment.vue";
import AddStockAdjustment from "@/views/admin/pages/AddStockAdjustment.vue";


export default [
        {
            path:'stock-adjust',
            name:'stock-adjust',
            component: StockAdjustment,
        },
        {
            path:'add-stock',
            name:'add-stock',
            component: AddStockAdjustment,
        },
]