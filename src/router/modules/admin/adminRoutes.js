import userRoutes from "./userRoutes";

export default [
    {
        path: "/admin",
        component: () =>
            import(/* webpackChunkName: dashboard */ "@/views/admin/App.vue"),
        children: [
            {
                path: "",
                name: "dashboard",
                component: () =>
                    import(
                        /* webpackChunkName: home */ "@/views/admin/Home.vue"
                    ),
            },
            {
                path: "profile",
                name: "notification",
                component: () =>
                    import(
                        /* webpackChunkName: notification */ "@/views/admin/Home.vue"
                    ),
            },
            ...userRoutes,
        ],
    },
];
