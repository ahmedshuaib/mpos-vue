import ReceiveBalance from "@/views/ReceiveBalance.vue";
import ReceivePersonal from "@/views/ReceivePersonal.vue";

export default [
        {
            path:'/receive-balance',
            name:'receive-balance',
            component: ReceiveBalance,
        },
        {
            path:'/receive-personal',
            name:'receive-personal',
            component: ReceivePersonal,
        },
]