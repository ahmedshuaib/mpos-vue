import ListProduct from "@/views/ListProduct.vue";
import AddProduct from "@/views/AddProduct.vue";
import NewList from "@/views/NewList.vue";

export default [
    // {
    //     path: "/product",
    //     name: "product",
    // },

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
];
