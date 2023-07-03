import ReceiveBalance from "@/views/admin/pages/ReceiveBalance.vue";
import ReceivePersonal from "@/views/admin/pages/ReceivePersonal.vue";

export default [
        {
            path:'receive-balance',
            name:'receive-balance',
            component: ReceiveBalance,
        },
        {
            path:'receive-personal',
            name:'receive-personal',
            component: ReceivePersonal,
        },
]