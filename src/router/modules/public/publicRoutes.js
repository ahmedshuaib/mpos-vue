import Home from "@/views/public/Index.vue";

export default [
    {
        path: "/",
        name: "home",
        component: () =>
            import(
                /* webpackChunkName: home */ "@/views/public/Index.vue"
            ),
        meta: {
            isProtected: false
        }
    },
    {
        path: "/packages",
        name: "packages",
        meta: {
            isProtected: false
        }
    },
    {
        path: "/contact",
        name: "contact",
        meta: {
            isProtected: false
        }
    },
];
