import Home from "@/views/public/Index.vue";

export default [
    {
        path: "/",
        name: "home",
        component: () =>
            import(
                /* webpackChunkName: home */ "@/views/public/Index.vue"
            ),
    },
    {
        path: "/packages",
        name: "packages",
    },
    {
        path: "/contact",
        name: "contact",
    },
];
