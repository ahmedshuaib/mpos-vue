import Bank from "@/views/Bank.vue";
import Personal from "@/views/Personal.vue";
import MainPoint from "@/views/MainPoint.vue";


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