import Usermodal from "@/components/admin/user/Usermodal";
import editmodal from "@/components/admin/user/Edit";

export default [
    {
        path: "/user",
        name: "user",
        component: () =>
            import(/* webpackChunkName: "User" */ "@/views/admin/User.vue"),
        children: [
            {
                path: "usermodal",
                name: "usermodal",
                components: {
                    default: Usermodal,
                    usermodal: Usermodal,
                },
            },
            {
                path: "edit/:id",
                name: "edit",
                components: {
                    default: editmodal,
                    edited: editmodal,
                },
            },
        ],
    },
    // {
    //     path: "/role",
    //     name: "role",
    //     component: () =>
    //         import(/* webpackChunkName: "Role" */ "@/views/Role.vue"),
    // },
    // {
    //     path: "/addrole",
    //     name: "addrole",
    //     component: () =>
    //         import(/* webpackChunkName: "Addrole" */ "@/views/Addrole.vue"),
    // },
    // {
    //     path: "/sales",
    //     name: "sales",
    //     component: () =>
    //         import(/* webpackChunkName: "sales" */ "@/views/Sales.vue"),
    //     children: [
    //         {
    //             path: "salesmodal",
    //             name: "salesmodal",
    //             component: () =>
    //                 import(
    //                     /* webpackChunkName: "salesmodal" */ "@/components/sales/Salesmodal.vue"
    //                 ),
    //         },
    //     ],
    // },
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
