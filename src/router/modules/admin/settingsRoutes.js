import BusinessSetting from "@/views/BusinessSetting.vue";
import BusinessLocation from "@/views/BusinessLocation.vue";
import Invoice from "@/views/Invoice.vue";
import BarCode from "@/views/BarCode.vue";
import ReceiptPrinter from "@/views/ReceiptPrinter.vue";
import TaxRate from "@/views/TaxRate.vue";
import Subscription from "@/views/Subscription.vue";
import Inbox from "@/views/Inbox.vue";
import Comment from "@/views/Comment.vue";
import Notification from "@/views/Notification.vue";

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