import editmodal from "@/components/admin/user/Edit.vue";
import usermodal from "@/components/admin/user/Usermodal.vue";
import userRoutes from "./userRoutes";
export default [
    {
        path: "/admin",
        name: "home",
        component: () =>
            import(/* webpackChunkName: "Home" */ "@/views/admin/Home.vue"),
        children: [...userRoutes],
    },
];
