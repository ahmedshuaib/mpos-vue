import Expenses from "@/views/Expenses.vue";
import ExpenseCategory from "@/views/ExpenseCategory.vue";

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