import ListProduct from "@/views/ListProduct.vue";
import AddProduct from "@/views/AddProduct.vue";
import NewList from "@/views/NewList.vue";
import PrintLabel from "@/views/PrintLabel.vue";
import Variations from "@/views/Variations.vue";
import AddVariation from "@/components/admin/parts/Product/variation/AddVariation.vue";
import EditVariation from "@/components/admin/parts/Product/variation/EditVariation.vue";
import ImportProduct from "@/views/ImportProduct.vue";
import Units from "@/views/Units.vue";
import Categories from "@/views/Categories.vue";
import AddCategory from "@/components/admin/parts/Product/category/AddCategory.vue";
import EditCategory from "@/components/admin/parts/Product/category/EditCategory.vue";
import SellGroup from "@/views/SellGroup.vue";
import EditSelling from "@/components/admin/parts/Product/sellingprice/EditSelling.vue";
import AddSelling from "@/components/admin/parts/Product/sellingprice/AddSelling.vue";
import AddUnits from "@/components/admin/parts/Product/units/AddUnits.vue";
import EditUnits from "@/components/admin/parts/Product/units/EditUnits.vue";
import Brands from "@/views/Brands.vue";
import AddBrand from "@/components/admin/parts/Product/brands/AddBrand.vue";
import EditBrand from "@/components/admin/parts/Product/brands/EditBrand.vue";
import ListPurchase from "@/views/ListPurchase.vue";
import AddPurchase from "@/views/AddPurchase.vue";
import PurchaseReturn from "@/views/PurchaseReturn.vue";

export default [

        {
            path:'list-product',
            name:'list-product',
            component: ListProduct,
        },
        {
            path:'add-product',
            name:'add-product',
            component: AddProduct,
        },
        {
            path:'new-product',
            name:'new-product',
            component: NewList,
        },
        {
            path:'print-label',
            name:'print-label',
            component: PrintLabel,
        },
        {
            path:'variations',
            name:'variations',
            component: Variations,
            children:[
                {
                    path:'add-variation',
                    name:'add-variation',
                    components:{
                        default:AddVariation,
                        AddVariation:AddVariation
                    }
                },
                {
                    path:'edit/:id',
                    name:'edit-variation',
                    components:{
                        default:EditVariation,
                        EditVariation:EditVariation
                    }
                }
            ]
        },
        {
            path:'import-product',
            name:'import-product',
            component: ImportProduct,
        },

        {
            path:'sell-group',
            name:'sell-group',
            component: SellGroup,
            children:[
                {
                    path:'add-selling',
                    name:'add-selling',
                    components:{
                        default:AddSelling,
                        AddSellGroup:AddSelling
                    }
                },
                {
                    path:'edit/:id',
                    name:'edit-sell-group',
                    components:{
                        default:EditSelling,
                        EditSelling:EditSelling
                    }
                }
            ]
        },

        {
            path:'units',
            name:'units',
            component: Units,
            children:[
                {
                    path:'add-unit',
                    name:'add-unit',
                    components:{
                        default:AddUnits,
                        AddUnit:AddUnits
                    }
                },
                {
                    path:'edit/:id',
                    name:'EditUnit',
                    components:{
                        default:EditUnits,
                        EditUnit:EditUnits
                    }
                }
            ]
        },
        {
            path:'categories',
            name:'categories',
            component: Categories,
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
                    name:'edit-category',
                    components:{
                        default:EditCategory,
                        EditCategory:EditCategory
                    }
                }
            ]
        },

        {
            path:'brands',
            name:'brands',
            component: Brands,
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
            path:'list-purchase',
            name:'list-purchase',
            component: ListPurchase,
        },
        {
            path:'add-purchase',
            name:'add-purchase',
            component: AddPurchase,
        },
        {
            path:'purchase-return',
            name:'purchase-return',
            component: PurchaseReturn,
        },

];
