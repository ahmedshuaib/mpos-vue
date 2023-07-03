import User from "@/views/admin/User.vue";
import userModal from "@/components/admin/parts/user/UserModal.vue";
import editModal from "@/components/admin/parts/user/Edit.vue";
import Role from "@/views/admin/Role.vue";
import Addrole from "@/views/admin/Addrole.vue";
import AddRole from "@/views/AddRole.vue";
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
            path:'/add-role',
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


    // {
    //     path: "/suppliers",
    //     name: "suppliers",
    //     component: () =>
    //         import(/* webpackChunkName: "suppliers" */ "@/views/Suppliers.vue"),
    //     children: [
    //         {
    //             path: "addcustomer",
    //             name: "addcustomer",
    //             component: () =>
    //                 import(
    //                     /* webpackChunkName: "addcustomer" */ "@/components/contacts/suppliers/Suppliersmodal.vue"
    //                 ),
    //         },
    //     ],
    // },
    // {
    //     path: "/customers",
    //     name: "customers",
    //     component: () =>
    //         import(/* webpackChunkName: "customers" */ "@/views/Customers.vue"),
    //     children: [
    //         {
    //             path: "newcustomers",
    //             name: "new-customers",
    //             component: () =>
    //                 import(
    //                     /* webpackChunkName: "newcustomers"*/ "@/components/contacts/customers/Newcustomer.vue"
    //                 ),
    //         },
    //     ],
    // },
    // {
    //     path: "/customergroup",
    //     name: "customer-group",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "customergroup"*/ "@/views/Customergroup.vue"
    //         ),
    //     children: [
    //         {
    //             path: "addgroup",
    //             name: "add-group",
    //             component: () =>
    //                 import(
    //                     /* webpackChunkName: "newcustomers"*/ "@/components/contacts/customergroup/Addgroups.vue"
    //                 ),
    //         },
    //     ],
    // },
    // {
    //     path: "/customerpay",
    //     name: "customer-pay",
    //     component: () =>
    //         import(
    //             /* webpackChunkName: "customerpayable" */ "@/views/Customerpay.vue"
    //         ),
    // },
];
