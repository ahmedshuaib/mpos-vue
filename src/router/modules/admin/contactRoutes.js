import Suppliers from "@/views/admin/pages/Suppliers.vue";
import SuppliersModal from "@/components/admin/parts/contacts/suppliers/SuppliersModal.vue";
import Customers from "@/views/admin/pages/Customers.vue";
import NewCustomer from "@/components/admin/parts/contacts/customers/NewCustomer.vue";
import CustomerGroup from "@/views/admin/pages/CustomerGroup.vue";
import AddGroup from "@/components/admin/parts/contacts/customergroup/AddGroup.vue";
import Edit from "@/components/admin/user/Edit.vue";
import CustomerPay from "@/views/admin/pages/Customerpay.vue";
import CustomerSms from "@/views/admin/pages/CustomerSms.vue";
import ImportContact from "@/views/admin/pages/ImportContact.vue";

export default [
    {
        path:'suppliers',
        name:'suppliers',
        component: () =>
            import(
                /* webpackChunkName: suppliers */
                "@/views/admin/pages/Suppliers.vue"
            ),
        meta: {
            isProtected: true
        },
        children:[
            {
                path: "add-supplier",
                name: "addCustomer",
                component: () =>
                    import(
                        /* webpackChunkName: addCustomer */
                        "@/components/admin/parts/contacts/suppliers/SuppliersModal.vue"
                    ),
                meta: {
                    isProtected: true
                },
            },

        ]
    },
    {
        path:'customers',
        name:'customers',
        component: () =>
            import(
                /* webpackChunkName: customers */
                "@/views/admin/pages/CustomerGroup.vue"
            ),
        meta: {
            isProtected: true
        },
        children:[
            {
                path:'new-customers',
                name:'new-customers',
                component: () =>
                    import(
                        /* webpackChunkName: new-customers */
                        "@/components/admin/parts/contacts/customers/NewCustomer.vue"
                    ),
                meta: {
                    isProtected: true
                },
            }
        ]
    },
    {
        path:'customer-group',
        name:'customer-group',
        component: () =>
            import(
                /* webpackChunkName: customer-group */
                "@/views/admin/pages/CustomerGroup.vue"
            ),
        meta: {
            isProtected: true
        },
        children:[
            {

                path:'add-group',
                name:'add-group',
                components:{
                    default: AddGroup,
                    AddGroup: AddGroup
                },
                meta: {
                    isProtected: true
                },
            },
            {
                path:'edit-group/:id',
                name: "edit-group",
                components:{
                    default: Edit,
                    EditGroup: Edit
                },
                meta: {
                    isProtected: true
                },
            }
        ]
    },
    {
        path:'customer-pay',
        name:'customer-pay',
        component: () =>
            import(
                /* webpackChunkName: customer-pay */
                "@/views/admin/pages/Customerpay.vue"
            ),
        meta: {
            isProtected: true
        },
    },
    {
        path:'customer-sms',
        name:'customer-sms',
        component: () =>
            import(
                /* webpackChunkName: customer-sms */
                "@/views/admin/pages/CustomerSms.vue"
            ),
        meta: {
            isProtected: true
        },
    },
    {
        path:'customer-contact',
        name:'customer-contact',
        component: () =>
            import(
                /* webpackChunkName: customer-contact */
                "@/views/admin/pages/ImportContact.vue"
            ),
        meta: {
            isProtected: true
        },

    },
]