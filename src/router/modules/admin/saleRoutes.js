import AllSales from "@/views/AllSales.vue";
import DiscountSale from "@/views/DiscountSale.vue";
import AddSale from "@/views/AddSale.vue";
import ListPose from "@/views/ListPose.vue";
import ListDraft from "@/views/ListDraft.vue";
import ListQuotations from "@/views/ListQuotations.vue";
import SellReturn from "@/views/SellReturn.vue";
import StockAdjustment from "@/views/StockAdjustment.vue";
import AddStockAdjustment from "@/views/AddStockAdjustment.vue";
import Expenses from "@/views/Expenses.vue";
import ExpenseCategory from "@/views/ExpenseCategory.vue";


export default [
        {
            path:'all-sales',
            name:'all-sales',
            component: AllSales,
        },
        {
            path:'discount-sales',
            name:'discount-sales',
            component: DiscountSale,
        },
        {
            path:'add-sales',
            name:'add-sales',
            component: AddSale,
        },
        {
            path:'list-pose',
            name:'list-pose',
            component: ListPose,
        },
        {
            path:'list-draft',
            name:'list-draft',
            component: ListDraft,
        },
        {
            path:'list-quotations',
            name:'list-quotations',
            component: ListQuotations,
        },
        {
            path:'sell-return',
            name:'sell-return',
            component: SellReturn,
        },
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
        {
            path:'expenses',
            name:'expenses',
            component: Expenses,
        },
        {
            path:'expenses-category',
            name:'expenses-category',
            component: ExpenseCategory,
        },
]