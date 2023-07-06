import userRoutes from "./userRoutes";
import productRoutes from "@/router/modules/admin/productRoutes";
import saleRoutes from "@/router/modules/admin/saleRoutes";
import reportRoutes from "@/router/modules/admin/reportRoutes";
import stockRoutes from "@/router/modules/admin/stockRoutes";
import expenseRoutes from "@/router/modules/admin/expenseRoutes";
import bankRoutes from "@/router/modules/admin/bankRoutes";
import transferBalanceRoutes from "@/router/modules/admin/transferBalanceRoutes";
import receiveBalanceRoutes from "@/router/modules/admin/receiveBalanceRoutes";
import settingsRoutes from "@/router/modules/admin/settingsRoutes";
import contactRoutes from "@/router/modules/admin/contactRoutes";

export default [
    {
        path: "/admin",
        name: "admin",
        component: () =>
            import(/* webpackChunkName: dashboard */
                "@/views/admin/App.vue"),
        meta: {
            isProtected: true
        },
        children: [
            {
                path: "",
                name: "dashboard",
                component: () =>
                    import(
                        /* webpackChunkName: dashboard */
                        "@/views/admin/Home.vue"
                    ),
                meta: {
                    isProtected: true
                },
            },
            {
                path: "profile",
                name: "notification",
                component: () =>
                    import(
                        /* webpackChunkName: notification */
                        "@/views/admin/Home.vue"
                    ),
                meta: {
                    isProtected: true
                },
            },
            ...userRoutes,
            ...productRoutes,
            ...saleRoutes,
            ...reportRoutes,
            ...stockRoutes,
            ...expenseRoutes,
            ...bankRoutes,
            ...transferBalanceRoutes,
            ...receiveBalanceRoutes,
            ...settingsRoutes,
            ...contactRoutes,
        ],
    },
];
