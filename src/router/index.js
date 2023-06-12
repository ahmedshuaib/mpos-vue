import { createRouter, createWebHistory } from "vue-router";

import dashboard from "./modules/dashboardRoutes";


const routes = [...dashboard];

const router = createRouter({
    history: createWebHistory(),
    routes,
    mode: 'history', // or 'hash' if using hash mode

});

export default router;
