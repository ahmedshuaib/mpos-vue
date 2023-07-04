import User from "@/views/admin/pages/User.vue";
import userModal from "@/components/admin/parts/user/UserModal.vue";
import editModal from "@/components/admin/parts/user/Edit.vue";
import Role from "@/views/admin/pages/Role.vue";
import AddRole from "@/views/admin/pages/AddRole.vue";
import SalesModal from "@/components/admin/parts/sales/SalesModal.vue";
import Sales from "@/views/admin/pages/Sales.vue";

export default [
    {
        path: "user",
        name: "user",
        component: () =>
            import(
                /* webpackChunkName: user */ "@/views/admin/pages/User.vue"
            ),

        children: [
            {
                path: "user-modal",
                name: "userModal",
                components:{
                    default: userModal,
                    userModal: userModal
                }
            },
            {
                path: "edit/:id",
                name: "edit",
                components:{
                    default: editModal,
                    edited: editModal
                }
            },
        ],
    },
        {
            path: "role",
            name: "role",
            component: () =>
                import(
                    /* webpackChunkName: role */ "@/views/admin/pages/Role.vue"
                ),
        },
        {
            path:'add-role',
            name:'addRole',
            component: () =>
                import(
                    /* webpackChunkName: addRole */ "@/views/admin/pages/AddRole.vue"
                ),
        },
        {
            path: "sales",
            name: "sales",
            component: () =>
                import(
                    /* webpackChunkName: sales */ "@/views/admin/pages/Sales.vue"
                ),
            children:[
                {
                    path: "sales-modal",
                    name: "salesModal",
                    component: () =>
                        import(
                            /* webpackChunkName: salesModal */ "@/components/admin/parts/sales/SalesModal.vue"
                        ),
                },

            ]
        },
];
