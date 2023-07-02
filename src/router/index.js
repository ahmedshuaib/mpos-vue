import { createRouter, createWebHistory } from "vue-router";

import { adminRoutes } from "./modules/admin";
import { publicRoutes } from "./modules/public";
import { authRoutes } from "./modules/auth";

<<<<<<< HEAD
const routes = [...adminRoutes, ...publicRoutes, ...authRoutes];
=======
const routes = [...dashboard];
>>>>>>> login

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: "history", // or 'hash' if using hash mode
});

export default router;
