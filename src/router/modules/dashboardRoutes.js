export default[
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "Home" */ "@/views/Home.vue"),
    },
    {
        path: "/user",
        name: "user",
        component: () => import(/* webpackChunkName: "User" */ "@/views/User.vue"),
        children:[
            {
                path: "usermodal",
                name: "usermodal",
                component: () => import(/* webpackChunkName: "usermodal" */ "@/views/Usermodal.vue"),
            },
        ]
    },
    {
        path: "/role",
        name: "role",
        component: () => import(/* webpackChunkName: "Role" */ "@/views/Role.vue"),
    },
    {
        path:'/addrole',
        name:'addrole',
        component:()=>import(/* webpackChunkName: "Addrole" */ "@/views/Addrole.vue"),
    },
    {
        path: "/sales",
        name: "sales",
        component: () => import(/* webpackChunkName: "sales" */ "@/views/Sales.vue"),
        children:[
            {
                path: "salesmodal",
                name: "salesmodal",
                component: () => import(/* webpackChunkName: "salesmodal" */ "@/views/Salesmodal.vue"),
            },
            
        ]
    },
]
