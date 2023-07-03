import BusinessSetting from "@/views/admin/pages/BusinessSetting.vue";
import BusinessLocation from "@/views/admin/pages/BusinessLocation.vue";
import Invoice from "@/views/admin/pages/Invoice.vue";
import BarCode from "@/views/admin/pages/BarCode.vue";
import ReceiptPrinter from "@/views/admin/pages/ReceiptPrinter.vue";
import TaxRate from "@/views/admin/pages/TaxRate.vue";
import Subscription from "@/views/admin/pages/Subscription.vue";
import Inbox from "@/views/admin/pages/Inbox.vue";
import Comment from "@/views/admin/pages/Comment.vue";
import Notification from "@/views/admin/pages/Notification.vue";

export default [
        {
            path:'business-setting',
            name:'business-setting',
            component: BusinessSetting,
        },
        {
            path:'business-location',
            name:'business-location',
            component: BusinessLocation,
        },
        {
            path:'invoice-setting',
            name:'invoice-setting',
            component: Invoice,
        },
        {
            path:'barcode-setting',
            name:'barcode-setting',
            component: BarCode,
        },
        {
            path:'receipt-printer',
            name:'receipt-printer',
            component: ReceiptPrinter,
        },
        {
            path:'tax-rate',
            name:'tax-rate',
            component: TaxRate,
        },
        {
            path:'subscription',
            name:'subscription',
            component:  Subscription,
        },

        {
            path:'inbox',
            name:'inbox',
            component: Inbox,
        },
        {
            path:'notification',
            name:'notification',
            component: Notification,
        },
        {
            path:'comment',
            name:'comment',
            component: Comment,
        },
]