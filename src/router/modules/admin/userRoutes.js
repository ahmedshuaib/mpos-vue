import User from "@/views/admin/User.vue";
import userModal from "@/components/admin/parts/user/UserModal.vue";
import editModal from "@/components/admin/parts/user/Edit.vue";

export default [
    // {
    //     path: "user",
    //     name: "user",
    //     component: User,
    //     children: [
    //         {
    //             path: "user-modal",
    //             name: "userModal",
    //             components:{
    //                 default: userModal,
    //                 userModal: userModal
    //             }
    //         },
    //         {
    //             path: "edit/:id",
    //             name: "edit",
    //             components:{
    //                 default: editModal,
    //                 edited: editModal
    //             }
    //         },
    //     ],
    // },
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
