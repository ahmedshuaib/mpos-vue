import Suppliers from "@/views/admin/Suppliers.vue";
import SuppliersModal from "@/components/admin/parts/contacts/suppliers/SuppliersModal.vue";
import Customers from "@/views/admin/Customers.vue";
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
        path:'customers',
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
        path:'customer-group',
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
        path:'customer-pay',
        name:'customer-pay',
        component: CustomerPay,
    },
    {
        path:'customer-sms',
        name:'customer-sms',
        component: CustomerSms,
    },
    {
        path:'customer-contact',
        name:'customer-contact',
        component: ImportContact,

    },
]