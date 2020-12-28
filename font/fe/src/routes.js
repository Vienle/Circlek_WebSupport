import Promotion from './components/it/promotion/Promotion'
import Product from './components/it/product/Product'
// import MkeymapLayout from './layout/mkeymapLayout/MkeymapLayout'


export const ADMIN_ROUTES = [
    // {
    //     name : "PROMOTION",
    //     path : "/it/promotion",
    //     exact : true,
    //     component: Promotion
    // },
    {
        name : "SCAN BARCODE",
        path : "/",
        exact : true,
        component: Product
    },
    // {
    //     name : "Mkeymap",
    //     path : "/it/mkeymap",
    //     exact : true,
    //     component: MkeymapLayout
    // }
];