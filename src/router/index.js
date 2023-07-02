import { createRouter, createWebHistory } from "vue-router";

import { adminRoutes } from "./modules/admin";
import { publicRoutes } from "./modules/public";
import { authRoutes } from "./modules/auth";



const routes = [...adminRoutes, ...publicRoutes, ...authRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: "history", // or 'hash' if using hash mode
});

export default router;
