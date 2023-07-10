import { createRouter, createWebHistory } from "vue-router";

import { adminRoutes } from "./modules/admin";
import { publicRoutes } from "./modules/public";
import { authRoutes } from "./modules/auth";
import {checkRouteAuthentication} from "@/services/AuthService";



const routes = [...adminRoutes, ...publicRoutes, ...authRoutes];

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: "history", // or 'hash' if using hash mode
});

// router.beforeEach(checkRouteAuthentication)
export default router;
