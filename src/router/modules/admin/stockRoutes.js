import StockAdjustment from "@/views/StockAdjustment.vue";
import AddStockAdjustment from "@/views/AddStockAdjustment.vue";


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