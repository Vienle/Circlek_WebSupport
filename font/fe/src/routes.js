import Promotion from './components/it/promotion/Promotion'
import Product from './components/it/product/Product'


export const ADMIN_ROUTES = [
    {
        name : "PROMOTION",
        path : "/it/promotion",
        exact : true,
        component: Promotion
    },
    {
        name : "SCAN BARCODE",
        path : "/it/product",
        exact : true,
        component: Product
    }
];