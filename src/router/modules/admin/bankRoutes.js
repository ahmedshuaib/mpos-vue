import BankUser from "@/views/admin/pages/BankUser.vue";
import AddBankUser from "@/components/admin/parts/bank/AddBankUser.vue";

export default [
        {
            path:'bank-user',
            name:'bank-user',
            component: BankUser,
            children:[
                {
                    path:'add-bank-user',
                    name:'add-bank-user',
                    component: AddBankUser,

                }
            ]
        },
]