import User from "@/views/admin/User.vue";
import userModal from "@/components/admin/parts/user/UserModal.vue";
import editModal from "@/components/admin/parts/user/Edit.vue";
import Role from "@/views/admin/Role.vue";
import AddRole from "@/views/AddRole.vue";
import SalesModal from "@/components/admin/parts/sales/SalesModal.vue";
import Sales from "@/views/admin/Sales.vue";
import Suppliers from "@/views/admin/Suppliers.vue";
import SuppliersModal from "@/components/admin/parts/contacts/suppliers/SuppliersModal.vue";
import Customers from "@/views/admin/Customers.vue";
import NewCustomer from "@/components/admin/parts/contacts/customers/NewCustomer.vue";
import CustomerGroup from "@/views/CustomerGroup.vue";
import AddGroup from "@/components/admin/parts/contacts/customergroup/AddGroup.vue";
import CustomerSms from "@/views/CustomerSms.vue";
import ImportContact from "@/views/ImportContact.vue";
import CustomerPay from "@/views/CustomerPay.vue";
import Edit from "@/components/admin/user/Edit.vue";
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

        {
            path:'/suppliers',
            name:'suppliers',
            component: Suppliers,
            children:[
                {
                    path: "add-customer",
                    name: "addCustomer",
                    component: SuppliersModal,
                },

            ]
        },
        {
            path:'/customers',
            name:'customers',
            component: Customers,
            children:[
                {
                    path:'new-customers',
                    name:'new-customers',
                    component: NewCustomer,
                }
            ]
        },
        {
            path:'/customer-group',
            name:'customer-group',
            component: CustomerGroup,
            children:[
                {

                    path:'add-group',
                    name:'add-group',
                    components:{
                        default: AddGroup,
                        AddGroup: AddGroup
                    }
                },
                {
                    path:'edit-group/:id',
                    name: "edit-group",
                    components:{
                        default: Edit,
                        EditGroup: Edit
                    }
                }
            ]
        },
        {
            path:'/customer-pay',
            name:'customer-pay',
            component: CustomerPay,
        },
        {
            path:'/customer-sms',
            name:'customer-sms',
            component: CustomerSms,
        },
        {
            path:'/customer-contact',
            name:'customer-contact',
            component: ImportContact,

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
