import User from "@/views/admin/User.vue";
import userModal from "@/components/admin/parts/user/UserModal.vue";
import editModal from "@/components/admin/parts/user/Edit.vue";
import Role from "@/views/admin/Role.vue";
import AddRole from "@/views/admin/pages/AddRole.vue";
import SalesModal from "@/components/admin/parts/sales/SalesModal.vue";
import Sales from "@/views/admin/Sales.vue";

export default [
    {
        path: "user",
        name: "user",
        component: User,
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
            component: Role,
        },
        {
            path:'add-role',
            name:'addRole',
            component: AddRole,
        },
        {
            path: "sales",
            name: "sales",
            component: Sales,
            children:[
                {
                    path: "sales-modal",
                    name: "salesModal",
                    component: SalesModal,
                },

            ]
        },
];
