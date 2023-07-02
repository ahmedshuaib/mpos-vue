import { createRouter, createWebHistory } from "vue-router";

import { adminRoutes } from "./modules/admin";
import { publicRoutes } from "./modules/public";
import { authRoutes } from "./modules/auth";
import dashboardRoutes from "@/router/modules/dashboardRoutes";


const routes = [...adminRoutes, ...publicRoutes, ...authRoutes, dashboardRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: "history", // or 'hash' if using hash mode
});

export default router;
