import Bank from "@/views/admin/pages/Bank.vue";
import Personal from "@/views/admin/pages/Personal.vue";
import MainPoint from "@/views/admin/pages/MainPoint.vue";


export default [
        {
            path:'bank',
            name:'bank',
            component: Bank,
        },
        {
            path:'personal',
            name:'personal',
            component: Personal,
        },
        {
            path:'main-point',
            name:'main-point',
            component: MainPoint,
        },
]