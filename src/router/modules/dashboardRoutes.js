import editmodal from '../../components/parts/user/edit.vue';
import usermodal from '../../components/parts/user/Usermodal.vue';
import EditGroup from '../../components/parts/contacts/customergroup/EditCustomer.vue';
import Addgroup from '../../components/parts/contacts/customergroup/Addgroups.vue';
import AddVariation from '../../components/parts/Product/variation/AddVariation.vue';
import EditVariation from '../../components/parts/Product/variation/EditVariation.vue';
import AddSellGroup from '../../components/parts/Product/sellingprice/AddSelling.vue'
import EditSelling from '../../components/parts/Product/sellingprice/EditSelling.vue'
import AddUnit from '../../components/parts/Product/units/AddUnits.vue';
import EditUnit from '../../components/parts/Product/units/EditUnits.vue';
import AddCategory from '../../components/parts/Product/category/AddCategory.vue'
import EditCategory from '../../components/parts/Product/category/EditCategory.vue'
import AddBrand from '../../components/parts/Product/brands/AddBrand.vue'
import EditBrand from '../../components/parts/Product/brands/EditBrand.vue'
export default[
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "Home" */ "../../views/Home.vue"),
    },
    {
        path: "/user",
        name: "user",
        component: () => import(/* webpackChunkName: "Usermodal" */ "../../views/User.vue"),
        children:[
            {
                path: "usermodal",
                name: "usermodal",
                components:{
                    default: usermodal,
                    usermodal: usermodal
                }
            },
            {
                path: "edit/:id",
                name: "edit", 
                components:{
                    default: editmodal,
                    edited: editmodal
                }
            },
        ]
    },
    {
        path: "/role",
        name: "role",
        component: () => import(/* webpackChunkName: "Role" */ "../../views/Role.vue"),
    },
    {
        path:'/addrole',
        name:'addrole',
        component:()=>import(/* webpackChunkName: "Addrole" */ "../../views/Addrole.vue"),
    },
    {
        path: "/sales",
        name: "sales",
        component: () => import(/* webpackChunkName: "Sales" */ "../../views/Sales.vue"),
        children:[
            {
                path: "salesmodal",
                name: "salesmodal",
                component: () => import(/* webpackChunkName: "salesmodal" */ "../../components/parts/sales/Salesmodal.vue"),
            },
            
        ]
    },
    {
        path:'/suppliers',
        name:'suppliers',
        component: () => import(/* webpackChunkName: "suppliers" */ "../../views/Suppliers.vue"),
        children:[
            {
                path: "addcustomer",
                name: "addcustomer",
                component: () => import(/* webpackChunkName: "Suppliersmodal" */ "../../components/parts/contacts/suppliers/Suppliersmodal.vue"),
            },
            
        ]
    },
    {
        path:'/customers',
        name:'customers',
        component: () => import(/* webpackChunkName: "Customers" */ "../../views/Customers.vue"),
        children:[
            {
                path:'newcustomers',
                name:'new-customers',
                component:() => import(/* webpackChunkName: "Newcustomer"*/ "../../components/parts/contacts/customers/Newcustomer.vue")
            }
        ]
    },
    {
        path:'/customergroup',
        name:'customer-group',
        component:() => import(/* webpackChunkName: "Customergroup"*/ "../../views/Customergroup.vue"),
        children:[
            {
                
                path:'addgroup',
                name:'add-group',
                components:{
                    default: Addgroup,
                    addgroup: Addgroup
                }
            },
            {
                path:'edit-group/:id',
                name: "edit-group", 
                components:{
                    default: EditGroup,
                    editgroup: EditGroup
                }
            }
        ]
    },
    {
        path:'/customerpay',
        name:'customer-pay',
        component: () => import(/* webpackChunkName: "Customerpay" */ "../../views/Customerpay.vue"),
    },
    {
        path:'/customer-sms',
        name:'customer-sms',
        component:() => import (/* webpackChunkName: "CustomerSms" */ "../../views/CustomerSms.vue")
    },
    {
        path:'/customer-contact',
        name:'customer-contact',
        component:() => import (/* webpackChunkName: "ImportContact" */ "../../views/ImportContact.vue")

    },
    {
        path:'/list-product',
        name:'list-product',
        component:() => import (/* webpackChunkName: "ListProduct" */ "../../views/ListProduct.vue")
    },
    {
        path:'/add-product',
        name:'add-product',
        component:() => import (/* webpackChunkName: "AddProduct" */ "../../views/AddProduct.vue")
    },
    {
        path:'/new-product',
        name:'new-product',
        component:() => import (/* webpackChunkName: "NewList" */ "../../views/NewList.vue")
    },
    {
        path:'/print-label',
        name:'print-label',
        component:() => import (/* webpackChunkName: "PrintLabel" */ "../../views/PrintLabel.vue")
    },
    {
        path:'/variations',
        name:'variations',
        component:() => import (/* webpackChunkName: "Variations" */ "../../views/Variations.vue"),
        children:[
            {
                path:'add-variation',
                name:'add-variation',
                components:{
                    default:AddVariation,
                    Addvariation:AddVariation
                }
            },
            {
                path:'edit/:id',
                name:'edit-variation',
                components:{
                    default:EditVariation,
                    editvariation:EditVariation
                }
            }
        ]
    },
    {
        path:'/import-product',
        name:'import-product',
        component:() => import (/* webpackChunkName: "ImportProduct" */ "../../views/ImportProduct.vue")
    },

    {
        path:'/sell-group',
        name:'sell-group',
        component:() => import (/* webpackChunkName: "SellGroup" */ "../../views/SellGroup.vue"),
        children:[
            {
                path:'add-selling',
                name:'add-selling',
                components:{
                    default:AddSellGroup,
                    AddSellGroup:AddSellGroup
                }
            },
            {
                path:'edit/:id',
                name:'edit-sellgroup',
                components:{
                    default:EditSelling,
                    EditSelling:EditSelling
                }
            }
        ]
    },

    {
        path:'/units',
        name:'units',
        component:() => import (/* webpackChunkName: "Units" */ "../../views/Units.vue"),
        children:[
            {
                path:'add-unit',
                name:'add-unit',
                component:() => import(/* webpackChunkName: "AddUnits"*/ ""),
                components:{
                    default:AddUnit,
                    AddUnit:AddUnit
                }
            },
            {
                path:'edit/:id',
                name:'EditUnit',
                components:{
                    default:EditUnit,
                    EditUnit:EditUnit
                }
            }
        ]
    },
    {
        path:'/categories',
        name:'categories',
        component:() => import (/* webpackChunkName: "Categories" */ "../../views/Categories.vue"),
        children:[
            {
                path:'add-category',
                name:'add-category',
                components:{
                   default: AddCategory,
                   AddCategory:AddCategory
                },           
            },
            {
                path:'edit/:id',
                name:'editcategory',
                components:{
                    default:EditCategory,
                    EditCategory:EditCategory
                }
            }
        ]
    },

    {
        path:'/brands',
        name:'brands',
        component:() => import (/* webpackChunkName: "brands" */ "../../views/Brands.vue"),
        children:[
            {
                path:'add-brands',
                name:'add-brands',
                components:{
                    default:AddBrand,
                    AddBrand:AddBrand
                }
            },
            {
                path:'edit/:id',
                name:'edit-brand',
                components:{
                    default:EditBrand,
                    EditBrand:EditBrand
                }
            }
        ]
    },
    {
        path:'/list-purchase',
        name:'list-purchase',
        component:() => import (/* webpackChunkName: "ListPurchase" */ "../../views/ListPurchase.vue"),
    },
    {
        path:'/add-purchase',
        name:'add-purchase',
        component:() => import (/* webpackChunkName: "AddPurchase" */ "../../views/AddPurchase.vue"),
    },  
    {
        path:'/purchase-return',
        name:'purchase-return',
        component:() => import (/* webpackChunkName: "PurchaseReturn" */ "../../views/PurchaseReturn.vue"),
    },
    {
        path:'/all-sales',
        name:'all-sales',
        component:() => import (/* webpackChunkName: "AllSales" */ "../../views/AllSales.vue"),
    },
    {
        path:'/discount-sales',
        name:'discount-sales',
        component:() => import (/* webpackChunkName: "DiscountSale" */ "../../views/DiscountSale.vue"),
    },
    {
        path:'/add-sales',
        name:'add-sales',
        component:() => import (/* webpackChunkName: "AddSale" */ "../../views/AddSale.vue"),
    },
    {
        path:'/list-pose',
        name:'list-pose',
        component:() => import (/* webpackChunkName: "ListPose" */ "../../views/ListPose.vue"),
    },
    {
        path:'/list-draft',
        name:'list-draft',
        component:() => import (/* webpackChunkName: "ListDraft" */ "../../views/ListDraft.vue"),
    },
    {
        path:'/list-quotations',
        name:'list-quotations',
        component:() => import (/* webpackChunkName: "ListQuotations" */ "../../views/ListQuotations.vue"),
    },
    {
        path:'/sell-return',
        name:'sell-return',
        component:() => import (/* webpackChunkName: "SellReturn" */ "../../views/SellReturn.vue"),
    },
    {
        path:'/stock-adjust',
        name:'stock-adjust',
        component:() => import (/* webpackChunkName: "StockAdjustment" */ "../../views/StockAdjustment.vue"),
    },
    {
        path:'/add-stock',
        name:'add-stock',
        component:() => import (/* webpackChunkName: "AddStockAdjustment" */ "../../views/AddStockAdjustment.vue"),
    },
    {
        path:'/expenses',
        name:'expenses',
        component:() => import (/* webpackChunkName: "Expenses" */ "../../views/Expenses.vue"),
    },
    {
        path:'/expenses-category',
        name:'expenses-category',
        component:() => import (/* webpackChunkName: "ExpenseCategory" */ "../../views/ExpenseCategory.vue"),
    },
    {
        path:'/reports',
        name:'reports',
        component:() => import (/* webpackChunkName: "Reports" */ "../../views/Reports.vue"),
    },

    {
        path:'/net-balance',
        name:'net-balance',
        component:() => import (/* webpackChunkName: "NetBalance" */ "../../views/NetBalance.vue"),
    },
    {
        path:'/supplier-position',
        name:'supplier-position',
        component:() => import (/* webpackChunkName: "SupplierPosition" */ "../../views/SupplierPosition.vue"),
    },
    {
        path:'/supplier-summery',
        name:'supplier-summery',
        component:() => import (/* webpackChunkName: "SupplierSummery" */ "../../views/SupplierSummery.vue"),
    },
    {
        path:'/supplier-report',
        name:'supplier-report',
        component:() => import (/* webpackChunkName: "SupplierReport" */ "../../views/SupplierReport.vue"),
    },
    {
        path:'/stock-position',
        name:'stock-position',
        component:() => import (/* webpackChunkName: "StockPosition" */ "../../views/StockPosition.vue"),
    },
    {
        path:'/stock-receipts',
        name:'stock-receipts',
        component:() => import (/* webpackChunkName: "StockReceipts" */ "../../views/StockReceipts.vue"),
    },
    {
        path:'/purchase-sale',
        name:'purchase-sale',
        component:() => import (/* webpackChunkName: "PurchaseSale" */ "../../views/PurchaseSale.vue"),
    },

    {
        path:'/transfer-report',
        name:'transfer-report',
        component:() => import (/* webpackChunkName: "TransferReport" */ "../../views/TransferReport.vue"),
    },
    {
        path:'/transaction-report',
        name:'transaction-report',
        component:() => import (/* webpackChunkName: "TransactionReport" */ "../../views/TransactionReport.vue"),
    },
    {
        path:'/bank-user',
        name:'bank-user',
        component:() => import (/* webpackChunkName: "BankUser" */ "../../views/BankUser.vue"),
        children:[
            {
                path:'addbank-user',
                name:'addbank-user',
                component:() => import (/* webpackChunkName: "AddBankUser" */ "../../components/parts/bank/AddBankUser.vue"),

            }
        ]
    },
    {
        path:'/bank',
        name:'bank',
        component:() => import (/* webpackChunkName: "Bank" */ "../../views/Bank.vue"),
    },
    {
        path:'/personal',
        name:'personal',
        component:() => import (/* webpackChunkName: "Personal" */ "../../views/Personal.vue"),
    },
    {
        path:'/main-point',
        name:'main-point',
        component:() => import (/* webpackChunkName: "MainPoint" */ "../../views/MainPoint.vue"),
    },
    {
        path:'/receive-balance',
        name:'receive-balance',
        component:() => import (/* webpackChunkName: "MainPoint" */ "../../views/ReceiveBalance.vue"),
    },
    {
        path:'/receive-personal',
        name:'receive-personal',
        component:() => import (/* webpackChunkName: "MainPoint" */ "../../views/ReceivePersonal.vue"),
    },
    {
        path:'/inbox',
        name:'inbox',
        component:() => import (/* webpackChunkName: "Inbox" */  "../../views/Inbox.vue"),
    },
    {
        path:'/notification',
        name:'notification',
        component:() => import (/* webpackChunkName: "Notification" */  "../../views/Notification.vue"),
    },
    {
        path:'/comment',
        name:'comment',
        component:() => import (/* webpackChunkName: "Comment" */  "../../views/Comment.vue"),
    },
    {
        path:'/business-setting',
        name:'business-setting',
        component:() => import (/* webpackChunkName: "BusinessSetting" */  "../../views/BusinessSetting.vue"),
    },
    {
        path:'/business-location',
        name:'business-location',
        component:() => import (/* webpackChunkName: "BusinessLocation" */  "../../views/BusinessLocation.vue"),
    },
    {
        path:'/invoice-setting',
        name:'invoice-setting',
        component:() => import (/* webpackChunkName: "Invoice" */  "../../views/Invoice.vue"),
    },
    {
        path:'/barcode-setting',
        name:'barcode-setting',
        component:() => import (/* webpackChunkName: "Barcode" */  "../../views/BarCode.vue"),
    },
    {
        path:'/receipt-printer',
        name:'receipt-printer',
        component:() => import (/* webpackChunkName: "ReceiptPrinter" */  "../../views/ReceiptPrinter.vue"),
    },
    {
        path:'/tax-rate',
        name:'tax-rate',
        component:() => import (/* webpackChunkName: "TextRate" */  "../../views/TaxRate.vue"),
    },
    {
        path:'/subscription',
        name:'subscription',
        component:() => import (/* webpackChunkName: "SubsCription" */  "../../views/SubsCription.vue"),
    },
    // login-pages
    {
        path:'/login',
        name:'login',
        component: () => import(/* webpackChunkName: "login" */ "../../views/Login.vue"),
    },
    {
        path:'/signup',
        name:'signup',
        component: () => import(/* webpackChunkName: "signup" */ "../../views/Signup.vue"),
    },
    // forgot-password-paths
    {
        path:'/verification',
        name:'verification',
        component: () => import(/* webpackChunkName: "verification" */ "../../auth/forgot-password/Verification.vue"),
    },
    {
        path:'/password/reset/',
        name:'forgot-password',
        component: () => import(/* webpackChunkName: "forgot-password" */ "../../auth/forgot-password/Forgot.vue"),
    },
    {
        path:'/password/mail',
        name:'mail',
        component: () => import(/* webpackChunkName: "mail" */ "../../auth/forgot-password/Mail.vue"),
    },
    {
        path: "/password/new-password",
        name: "new-password",
        component: () =>
            import(/* webpackChunkName: "newpassword" */ "../../auth/forgot-password/Reset.vue"),
    },
    {
        path: "/password/success-password",
        name: "reset-sucess",
        component: () =>
            import(/* webpackChunkName: "reset-sucess" */ "../../auth/forgot-password/Successreset.vue"),
    },
    // forgot-password-paths-end

    // email-verification-paths
    {
        path: "/email/verification",
        name: "email-verify",
        component: () =>
            import(/* webpackChunkName: "forgotPassword" */ "../../auth/email-verification/Emailverify.vue"),
    },
    {
        path: "/email/verifycode",
        name: "verify-code",
        component: () =>
            import(/* webpackChunkName: "forgotPassword" */ "../../auth/email-verification/Codeverify.vue"),
    },
    {
        path: "/email/success-verify",
        name: "verify-success",
        component: () =>
            import(/* webpackChunkName: "forgotPassword" */ "../../auth/email-verification/Verified.vue"),
    },
    // email-verification-paths-end
]
