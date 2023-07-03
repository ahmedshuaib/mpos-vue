import Expenses from "@/views/admin/pages/Expenses.vue";
import ExpenseCategory from "@/views/admin/pages/ExpenseCategory.vue";

export default [

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