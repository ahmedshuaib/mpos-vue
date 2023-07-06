/**
 * @deprecated This file is no longer actively maintained and should not be used.
 */


import EditGroup from '../../components/parts/contacts/customergroup/EditCustomer.vue';
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
import AddRole from "../../views/admin/pages/AddRole.vue";
import SalesModal from "../../components/parts/sales/SalesModal.vue";
import SuppliersModal from "../../components/parts/contacts/suppliers/SuppliersModal.vue";
import NewCustomer from "../../components/parts/contacts/customers/NewCustomer.vue";
import CustomerGroup from "../../views/admin/pages/CustomerGroup.vue";
import AddGroup from "../../components/parts/contacts/customergroup/AddGroup.vue";
import CustomerPay from "../../views/admin/pages/Customerpay.vue";
import CustomerSms from "../../views/admin/pages/CustomerSms.vue";
import ImportContact from "../../views/admin/pages/ImportContact.vue";
import ListProduct from "../../views/admin/pages/ListProduct.vue";
import AddProduct from "../../views/admin/pages/AddProduct.vue";
import NewList from "../../views/admin/pages/NewList.vue";
import PrintLabel from "../../views/admin/pages/PrintLabel.vue";
import Variations from "../../views/admin/pages/Variations.vue";
import ImportProduct from "../../views/admin/pages/ImportProduct.vue";
import SellGroup from "../../views/admin/pages/SellGroup.vue";
import Units from "../../views/admin/pages/Units.vue";
import Categories from "../../views/admin/pages/Categories.vue";
import ListPurchase from "../../views/admin/pages/ListPurchase.vue";
import AddPurchase from "../../views/admin/pages/AddPurchase.vue";
import PurchaseReturn from "../../views/admin/pages/PurchaseReturn.vue";
import AllSales from "../../views/admin/pages/AllSales.vue";
import DiscountSale from "../../views/admin/pages/DiscountSale.vue";
import AddSale from "../../views/admin/pages/AddSale.vue";
import ListPose from "../../views/admin/pages/ListPose.vue";
import ListDraft from "../../views/admin/pages/ListDraft.vue";
import ListQuotations from "../../views/admin/pages/ListQuotations.vue";
import SellReturn from "../../views/admin/pages/SellReturn.vue";
import StockAdjustment from "../../views/admin/pages/StockAdjustment.vue";
import AddStockAdjustment from "../../views/admin/pages/AddStockAdjustment.vue";
import ExpenseCategory from "../../views/admin/pages/ExpenseCategory.vue";
import Expenses from "../../views/admin/pages/Expenses.vue";
import Reports from "../../views/admin/pages/Reports.vue";
import NetBalance from "../../views/admin/pages/NetBalance.vue";
import SupplierPosition from "../../views/admin/pages/SupplierPosition.vue";
import SupplierSummery from "../../views/admin/pages/SupplierSummery.vue";
import SupplierReport from "../../views/admin/pages/SupplierReport.vue";
import StockPosition from "../../views/admin/pages/StockPosition.vue";
import StockReceipts from "../../views/admin/pages/StockReceipts.vue";
import PurchaseSale from "../../views/admin/pages/PurchaseSale.vue";
import TransferReport from "../../views/admin/pages/TransferReport.vue";
import TransactionReport from "../../views/admin/pages/TransactionReport.vue";
import BankUser from "../../views/admin/pages/BankUser.vue";
import AddBankUser from "../../components/parts/bank/AddBankUser.vue";
import Bank from "../../views/admin/pages/Bank.vue";
import Personal from "../../views/admin/pages/Personal.vue";
import MainPoint from "../../views/admin/pages/MainPoint.vue";
import ReceiveBalance from "../../views/admin/pages/ReceiveBalance.vue";
import ReceivePersonal from "../../views/admin/pages/ReceivePersonal.vue";
import Inbox from "../../views/admin/pages/Inbox.vue";
import Notification from "../../views/admin/pages/Notification.vue";
import Comment from "../../views/admin/pages/Comment.vue";
import Subscription from "../../views/admin/pages/Subscription.vue";
import TaxRate from "../../views/admin/pages/TaxRate.vue";
import ReceiptPrinter from "../../views/admin/pages/ReceiptPrinter.vue";
import BusinessSetting from "../../views/admin/pages/BusinessSetting.vue";
import BusinessLocation from "../../views/admin/pages/BusinessLocation.vue";
import Invoice from "../../views/admin/pages/Invoice.vue";
import BarCode from "../../views/admin/pages/BarCode.vue";
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import Home from "@/views/admin/Home.vue";
import Role from "@/views/admin/pages/Role.vue";
import Sales from "@/views/admin/pages/Sales.vue";
import Suppliers from "@/views/admin/pages/Suppliers.vue";
import Customers from "@/views/admin/pages/Customers.vue";


export default[

    // {
    //     path: '',
    //     name: 'dashboard',
    //     component: DashboardLayout,
    //     children: [
    //         {
    //             path: "",
    //             name: "home",
    //             component: Home,
    //         },
    //         {
    //             path: "/role",
    //             name: "role",
    //             component: Role,
    //         },
    //         {
    //             path:'/add-role',
    //             name:'addRole',
    //             component: AddRole,
    //         },
    //         {
    //             path: "/sales",
    //             name: "sales",
    //             component: Sales,
    //             children:[
    //                 {
    //                     path: "sales-modal",
    //                     name: "salesModal",
    //                     component: SalesModal,
    //                 },
    //
    //             ]
    //         },
    //         {
    //             path:'/suppliers',
    //             name:'suppliers',
    //             component: Suppliers,
    //             children:[
    //                 {
    //                     path: "add-customer",
    //                     name: "addCustomer",
    //                     component: SuppliersModal,
    //                 },
    //
    //             ]
    //         },
    //         {
    //             path:'/customers',
    //             name:'customers',
    //             component: Customers,
    //             children:[
    //                 {
    //                     path:'new-customers',
    //                     name:'new-customers',
    //                     component: NewCustomer,
    //                 }
    //             ]
    //         },
    //         {
    //             path:'/customer-group',
    //             name:'customer-group',
    //             component: CustomerGroup,
    //             children:[
    //                 {
    //
    //                     path:'add-group',
    //                     name:'add-group',
    //                     components:{
    //                         default: AddGroup,
    //                         AddGroup: AddGroup
    //                     }
    //                 },
    //                 {
    //                     path:'edit-group/:id',
    //                     name: "edit-group",
    //                     components:{
    //                         default: EditGroup,
    //                         EditGroup: EditGroup
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             path:'/customer-pay',
    //             name:'customer-pay',
    //             component: CustomerPay,
    //         },
    //         {
    //             path:'/customer-sms',
    //             name:'customer-sms',
    //             component: CustomerSms,
    //         },
    //         {
    //             path:'/customer-contact',
    //             name:'customer-contact',
    //             component: ImportContact,
    //
    //         },
    //         {
    //             path:'/list-product',
    //             name:'list-product',
    //             component: ListProduct,
    //         },
    //         {
    //             path:'/add-product',
    //             name:'add-product',
    //             component: AddProduct,
    //         },
    //         {
    //             path:'/new-product',
    //             name:'new-product',
    //             component: NewList,
    //         },
    //         {
    //             path:'/print-label',
    //             name:'print-label',
    //             component: PrintLabel,
    //         },
    //         {
    //             path:'/variations',
    //             name:'variations',
    //             component: Variations,
    //             children:[
    //                 {
    //                     path:'add-variation',
    //                     name:'add-variation',
    //                     components:{
    //                         default:AddVariation,
    //                         AddVariation:AddVariation
    //                     }
    //                 },
    //                 {
    //                     path:'edit/:id',
    //                     name:'edit-variation',
    //                     components:{
    //                         default:EditVariation,
    //                         EditVariation:EditVariation
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             path:'/import-product',
    //             name:'import-product',
    //             component: ImportProduct,
    //         },
    //
    //         {
    //             path:'/sell-group',
    //             name:'sell-group',
    //             component: SellGroup,
    //             children:[
    //                 {
    //                     path:'add-selling',
    //                     name:'add-selling',
    //                     components:{
    //                         default:AddSellGroup,
    //                         AddSellGroup:AddSellGroup
    //                     }
    //                 },
    //                 {
    //                     path:'edit/:id',
    //                     name:'edit-sell-group',
    //                     components:{
    //                         default:EditSelling,
    //                         EditSelling:EditSelling
    //                     }
    //                 }
    //             ]
    //         },
    //
    //         {
    //             path:'/units',
    //             name:'units',
    //             component: Units,
    //             children:[
    //                 {
    //                     path:'add-unit',
    //                     name:'add-unit',
    //                     components:{
    //                         default:AddUnit,
    //                         AddUnit:AddUnit
    //                     }
    //                 },
    //                 {
    //                     path:'edit/:id',
    //                     name:'EditUnit',
    //                     components:{
    //                         default:EditUnit,
    //                         EditUnit:EditUnit
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             path:'/categories',
    //             name:'categories',
    //             component: Categories,
    //             children:[
    //                 {
    //                     path:'add-category',
    //                     name:'add-category',
    //                     components:{
    //                         default: AddCategory,
    //                         AddCategory:AddCategory
    //                     },
    //                 },
    //                 {
    //                     path:'edit/:id',
    //                     name:'edit-category',
    //                     components:{
    //                         default:EditCategory,
    //                         EditCategory:EditCategory
    //                     }
    //                 }
    //             ]
    //         },
    //
    //         {
    //             path:'/brands',
    //             name:'brands',
    //             component:() => import (/* webpackChunkName: "brands" */ "../../views/Brands.vue"),
    //             children:[
    //                 {
    //                     path:'add-brands',
    //                     name:'add-brands',
    //                     components:{
    //                         default:AddBrand,
    //                         AddBrand:AddBrand
    //                     }
    //                 },
    //                 {
    //                     path:'edit/:id',
    //                     name:'edit-brand',
    //                     components:{
    //                         default:EditBrand,
    //                         EditBrand:EditBrand
    //                     }
    //                 }
    //             ]
    //         },
    //         {
    //             path:'/list-purchase',
    //             name:'list-purchase',
    //             component: ListPurchase,
    //         },
    //         {
    //             path:'/add-purchase',
    //             name:'add-purchase',
    //             component: AddPurchase,
    //         },
    //         {
    //             path:'/purchase-return',
    //             name:'purchase-return',
    //             component: PurchaseReturn,
    //         },
    //         {
    //             path:'/all-sales',
    //             name:'all-sales',
    //             component: AllSales,
    //         },
    //         {
    //             path:'/discount-sales',
    //             name:'discount-sales',
    //             component: DiscountSale,
    //         },
    //         {
    //             path:'/add-sales',
    //             name:'add-sales',
    //             component: AddSale,
    //         },
    //         {
    //             path:'/list-pose',
    //             name:'list-pose',
    //             component: ListPose,
    //         },
    //         {
    //             path:'/list-draft',
    //             name:'list-draft',
    //             component: ListDraft,
    //         },
    //         {
    //             path:'/list-quotations',
    //             name:'list-quotations',
    //             component: ListQuotations,
    //         },
    //         {
    //             path:'/sell-return',
    //             name:'sell-return',
    //             component: SellReturn,
    //         },
    //         {
    //             path:'/stock-adjust',
    //             name:'stock-adjust',
    //             component: StockAdjustment,
    //         },
    //         {
    //             path:'/add-stock',
    //             name:'add-stock',
    //             component: AddStockAdjustment,
    //         },
    //         {
    //             path:'/expenses',
    //             name:'expenses',
    //             component: Expenses,
    //         },
    //         {
    //             path:'/expenses-category',
    //             name:'expenses-category',
    //             component: ExpenseCategory,
    //         },
    //         {
    //             path:'/reports',
    //             name:'reports',
    //             component: Reports,
    //         },
    //
    //         {
    //             path:'/net-balance',
    //             name:'net-balance',
    //             component: NetBalance,
    //         },
    //         {
    //             path:'/supplier-position',
    //             name:'supplier-position',
    //             component: SupplierPosition,
    //         },
    //         {
    //             path:'/supplier-summery',
    //             name:'supplier-summery',
    //             component: SupplierSummery,
    //         },
    //         {
    //             path:'/supplier-report',
    //             name:'supplier-report',
    //             component: SupplierReport,
    //         },
    //         {
    //             path:'/stock-position',
    //             name:'stock-position',
    //             component: StockPosition,
    //         },
    //         {
    //             path:'/stock-receipts',
    //             name:'stock-receipts',
    //             component: StockReceipts,
    //         },
    //         {
    //             path:'/purchase-sale',
    //             name:'purchase-sale',
    //             component: PurchaseSale,
    //         },
    //
    //         {
    //             path:'/transfer-report',
    //             name:'transfer-report',
    //             component: TransferReport,
    //         },
    //         {
    //             path:'/transaction-report',
    //             name:'transaction-report',
    //             component: TransactionReport,
    //         },
    //         {
    //             path:'/bank-user',
    //             name:'bank-user',
    //             component: BankUser,
    //             children:[
    //                 {
    //                     path:'add-bank-user',
    //                     name:'add-bank-user',
    //                     component: AddBankUser,
    //
    //                 }
    //             ]
    //         },
    //         {
    //             path:'/bank',
    //             name:'bank',
    //             component: Bank,
    //         },
    //         {
    //             path:'/personal',
    //             name:'personal',
    //             component: Personal,
    //         },
    //         {
    //             path:'/main-point',
    //             name:'main-point',
    //             component: MainPoint,
    //         },
    //         {
    //             path:'/receive-balance',
    //             name:'receive-balance',
    //             component: ReceiveBalance,
    //         },
    //         {
    //             path:'/receive-personal',
    //             name:'receive-personal',
    //             component: ReceivePersonal,
    //         },
    //         {
    //             path:'/inbox',
    //             name:'inbox',
    //             component: Inbox,
    //         },
    //         {
    //             path:'/notification',
    //             name:'notification',
    //             component: Notification,
    //         },
    //         {
    //             path:'/comment',
    //             name:'comment',
    //             component: Comment,
    //         },
    //         {
    //             path:'/business-setting',
    //             name:'business-setting',
    //             component: BusinessSetting,
    //         },
    //         {
    //             path:'/business-location',
    //             name:'business-location',
    //             component: BusinessLocation,
    //         },
    //         {
    //             path:'/invoice-setting',
    //             name:'invoice-setting',
    //             component: Invoice,
    //         },
    //         {
    //             path:'/barcode-setting',
    //             name:'barcode-setting',
    //             component: BarCode,
    //         },
    //         {
    //             path:'/receipt-printer',
    //             name:'receipt-printer',
    //             component: ReceiptPrinter,
    //         },
    //         {
    //             path:'/tax-rate',
    //             name:'tax-rate',
    //             component: TaxRate,
    //         },
    //         {
    //             path:'/subscription',
    //             name:'subscription',
    //             component:  Subscription,
    //         },
    //     ]
    //
    // },

]