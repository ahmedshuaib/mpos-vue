import ListProduct from "@/views/admin/pages/ListProduct.vue";
import AddProduct from "@/views/admin/pages/AddProduct.vue";
import NewList from "@/views/admin/pages/NewList.vue";
import PrintLabel from "@/views/admin/pages/PrintLabel.vue";
import Variations from "@/views/admin/pages/Variations.vue";
import AddVariation from "@/components/admin/parts/Product/variation/AddVariation.vue";
import EditVariation from "@/components/admin/parts/Product/variation/EditVariation.vue";
import ImportProduct from "@/views/admin/pages/ImportProduct.vue";
import Units from "@/views/admin/pages/Units.vue";
import Categories from "@/views/admin/pages/Categories.vue";
import AddCategory from "@/components/admin/parts/Product/category/AddCategory.vue";
import EditCategory from "@/components/admin/parts/Product/category/EditCategory.vue";
import SellGroup from "@/views/admin/pages/SellGroup.vue";
import EditSelling from "@/components/admin/parts/Product/sellingprice/EditSelling.vue";
import AddSelling from "@/components/admin/parts/Product/sellingprice/AddSelling.vue";
import AddUnits from "@/components/admin/parts/Product/units/AddUnits.vue";
import EditUnits from "@/components/admin/parts/Product/units/EditUnits.vue";
import Brands from "@/views/admin/pages/Brands.vue";
import AddBrand from "@/components/admin/parts/Product/brands/AddBrand.vue";
import EditBrand from "@/components/admin/parts/Product/brands/EditBrand.vue";
import ListPurchase from "@/views/admin/pages/ListPurchase.vue";
import AddPurchase from "@/views/admin/pages/AddPurchase.vue";
import PurchaseReturn from "@/views/admin/pages/PurchaseReturn.vue";

export default [

        {
            path:'list-product',
            name:'list-product',
            component: () =>
                import(
                    /* webpackChunkName: list-product */ "@/views/admin/pages/ListProduct.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'add-product',
            name:'add-product',
            component: () =>
                import(
                    /* webpackChunkName: add-product */ "@/views/admin/pages/AddProduct.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'new-product',
            name:'new-product',
            component: () =>
                import(
                    /* webpackChunkName: new-product */ "@/views/admin/pages/NewList.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'print-label',
            name:'print-label',
            component: () =>
                import(
                    /* webpackChunkName: print-label */ "@/views/admin/pages/PrintLabel.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'variations',
            name:'variations',
            component: () =>
                import(
                    /* webpackChunkName: variations */ "@/views/admin/pages/Variations.vue"
                ),
            meta: {
                isProtected: true
            },
            children:[
                {
                    path:'add-variation',
                    name:'add-variation',
                    components:{
                        default:AddVariation,
                        AddVariation:AddVariation
                    },
                    meta: {
                        isProtected: true
                    },
                },
                {
                    path:'edit/:id',
                    name:'edit-variation',
                    components:{
                        default:EditVariation,
                        EditVariation:EditVariation
                    },
                    meta: {
                        isProtected: true
                    },
                }
            ]
        },
        {
            path:'import-product',
            name:'import-product',
            component: () =>
                import(
                    /* webpackChunkName: import-product */ "@/views/admin/pages/ImportProduct.vue"
                ),
            meta: {
                isProtected: true
            },
        },

        {
            path:'sell-group',
            name:'sell-group',
            component: () =>
                import(
                    /* webpackChunkName: sell-group */ "@/views/admin/pages/SellGroup.vue"
                ),
            meta: {
                isProtected: true
            },
            children:[
                {
                    path:'add-selling',
                    name:'add-selling',
                    components:{
                        default:AddSelling,
                        AddSellGroup:AddSelling
                    },
                    meta: {
                        isProtected: true
                    },
                },
                {
                    path:'edit/:id',
                    name:'edit-sell-group',
                    components:{
                        default:EditSelling,
                        EditSelling:EditSelling
                    },
                    meta: {
                        isProtected: true
                    },
                }
            ]
        },

        {
            path:'units',
            name:'units',
            component: () =>
                import(
                    /* webpackChunkName: units */ "@/views/admin/pages/Units.vue"
                ),
            meta: {
                isProtected: true
            },
            children:[
                {
                    path:'add-unit',
                    name:'add-unit',
                    components:{
                        default:AddUnits,
                        AddUnit:AddUnits
                    },
                    meta: {
                        isProtected: true
                    },
                },
                {
                    path:'edit/:id',
                    name:'EditUnit',
                    components:{
                        default:EditUnits,
                        EditUnit:EditUnits
                    },
                    meta: {
                        isProtected: true
                    },

                }
            ]
        },
        {
            path:'categories',
            name:'categories',
            component: () =>
                import(
                    /* webpackChunkName: categories */ "@/views/admin/pages/Categories.vue"
                ),
            meta: {
                isProtected: true
            },
            children:[
                {
                    path:'add-category',
                    name:'add-category',
                    components:{
                        default: AddCategory,
                        AddCategory:AddCategory
                    },
                    meta: {
                        isProtected: true
                    },
                },
                {
                    path:'edit/:id',
                    name:'edit-category',
                    components:{
                        default:EditCategory,
                        EditCategory:EditCategory
                    },
                    meta: {
                        isProtected: true
                    },
                }
            ]
        },

        {
            path:'brands',
            name:'brands',
            component: () =>
                import(
                    /* webpackChunkName: brands */ "@/views/admin/pages/Brands.vue"
                ),
            meta: {
                isProtected: true
            },
            children:[
                {
                    path:'add-brands',
                    name:'add-brands',
                    components:{
                        default:AddBrand,
                        AddBrand:AddBrand
                    },
                    meta: {
                        isProtected: true
                    },
                },
                {
                    path:'edit/:id',
                    name:'edit-brand',
                    components:{
                        default:EditBrand,
                        EditBrand:EditBrand
                    },
                    meta: {
                        isProtected: true
                    },
                }
            ]
        },
        {
            path:'list-purchase',
            name:'list-purchase',
            component: () =>
                import(
                    /* webpackChunkName: list-purchase */ "@/views/admin/pages/ListPurchase.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'add-purchase',
            name:'add-purchase',
            component: () =>
                import(
                    /* webpackChunkName: add-purchase */ "@/views/admin/pages/AddPurchase.vue"
                ),
            meta: {
                isProtected: true
            },
        },
        {
            path:'purchase-return',
            name:'purchase-return',
            component: () =>
                import(
                    /* webpackChunkName: purchase-return */ "@/views/admin/pages/PurchaseReturn.vue"
                ),
            meta: {
                isProtected: true
            },
        },

];
