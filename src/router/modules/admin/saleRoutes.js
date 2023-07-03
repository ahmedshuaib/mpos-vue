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