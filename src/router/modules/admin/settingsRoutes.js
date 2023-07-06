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
            component: () =>
                import(
                    /* webpackChunkName: business-setting */
                    "@/views/admin/pages/BusinessSetting.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'business-location',
            name:'business-location',
            component: () =>
                import(
                    /* webpackChunkName: business-location */
                    "@/views/admin/pages/BusinessLocation.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'invoice-setting',
            name:'invoice-setting',
            component: () =>
                import(
                    /* webpackChunkName: invoice-setting */
                    "@/views/admin/pages/Invoice.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'barcode-setting',
            name:'barcode-setting',
            component: () =>
                import(
                    /* webpackChunkName: barcode-setting */
                    "@/views/admin/pages/BarCode.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'receipt-printer',
            name:'receipt-printer',
            component: () =>
                import(
                    /* webpackChunkName: receipt-printer */
                    "@/views/admin/pages/ReceiptPrinter.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'tax-rate',
            name:'tax-rate',
            component: () =>
                import(
                    /* webpackChunkName: tax-rate */
                    "@/views/admin/pages/TaxRate.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'subscription',
            name:'subscription',
            component: () =>
                import(
                    /* webpackChunkName: subscription */
                    "@/views/admin/pages/Subscription.vue"
                ),
            meta: {
                isProtected: true
            },
        },

        {
            path:'inbox',
            name:'inbox',
            component: () =>
                import(
                    /* webpackChunkName: inbox */
                    "@/views/admin/pages/Inbox.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'notification',
            name:'notification',
            component: () =>
                import(
                    /* webpackChunkName: notification */
                    "@/views/admin/pages/Notification.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'comment',
            name:'comment',
            component: () =>
                import(
                    /* webpackChunkName: comment */
                    "@/views/admin/pages/Comment.vue"
                ),
            meta: {
                isProtected: true
            },
        },
]