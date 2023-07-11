import User from "@/views/admin/pages/User.vue";
import userModal from "@/components/admin/parts/user/UserModal.vue";
import editModal from "@/components/admin/parts/user/Edit.vue";
import Role from "@/views/admin/pages/Role.vue";
import AddRole from "@/views/admin/pages/AddRole.vue";
import SalesModal from "@/components/admin/parts/sales/SalesModal.vue";
import Sales from "@/views/admin/pages/Sales.vue";
import UpdateRole from "@/views/admin/pages/UpdateRole.vue";

export default [
    {
        path: "user",
        name: "user",
        component: () =>
            import(
                /* webpackChunkName: user */
                "@/views/admin/pages/User.vue"
            ),
        meta: {
            isProtected: true
        },

        children: [
            {
                path: "user-modal",
                name: "userModal",
                components:{
                    default: userModal,
                    userModal: userModal
                },
                meta: {
                    isProtected: true
                },
            },
            {
                path: "edit/:userId",
                name: "edit",
                components:{
                    default: editModal,
                    edited: editModal
                },
                props:true,
                meta: {
                    isProtected: true
                },
            },
        ],
    },
    {
        path: "role",
        name: "role",
        component: () =>
            import(
                /* webpackChunkName: role */
                "@/views/admin/pages/Role.vue"
            ),
        meta: {
            isProtected: true
        },
    },
    {
        path:'add-role',
        name:'addRole',
        component: () =>
            import(
                /* webpackChunkName: addRole */
                "@/views/admin/pages/AddRole.vue"
                ),
        meta: {
            isProtected: true
        },
    },
    {
        path: "edit/:roleId",
        name: "updateRole",
        component: () =>
            import(
                /* webpackChunkName: UpdateRole */
                "@/views/admin/pages/UpdateRole.vue"
                ),
        props:true,
        meta: {
            isProtected: true
        },
    },


    {
        path: "sales",
        name: "sales",
        component: () =>
            import(
                /* webpackChunkName: sales */
                "@/views/admin/pages/Sales.vue"
            ),
        meta: {
            isProtected: true
        },
        children:[
            {
                path: "sales-modal",
                name: "salesModal",
                component: () =>
                    import(
                        /* webpackChunkName: salesModal */
                        "@/components/admin/parts/sales/SalesModal.vue"
                    ),
                meta: {
                    isProtected: true
                },
            },

        ]
    },
];
