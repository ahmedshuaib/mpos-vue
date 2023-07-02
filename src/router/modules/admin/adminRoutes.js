import editmodal from "@/components/admin/user/Edit.vue";
import usermodal from "@/components/admin/user/Usermodal.vue";
import userRoutes from "./userRoutes";
import Layout from "@/views/admin/App.vue";

export default [
    {
        path: "/admin",
        name: "dashboard",
        component: import(
            /* webpackChunkName: dashboard */ "@/views/admin/App.vue"
        ),
        children: [
            {
                path: "/check",
                name: "dashboard.index",
                component: {
                    homeComponent: import(
                        /* webpackChunkName: home */ "@/components/admin/home/Home.vue"
                    ),
                },
            },
            ...userRoutes,
        ],
    },
];
