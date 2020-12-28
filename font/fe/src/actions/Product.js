import * as ProductActionTypes from './../contants/ProductActionTypes'

export const getByProdcutAndStores = (itemcodes) =>{
    console.log("1",itemcodes)
    return {
        type : ProductActionTypes.PRODUCT_SEARCH,
        payload : {
            data : itemcodes
        }

    }
}

export const getByProdcutAndStoresSuccess = (data) => {
    console.log("getByProdcutAndStoresSuccess",data)
    return{
        type : ProductActionTypes.PRODUCT_SEARCH_SUCCESSS,
        payload : {
            data : data
        }
    }

}

export const getByProdcutAndStoresSuccessFaild = (data) => {
    return{
        type : ProductActionTypes.PRODUCT_SEARCH_FAILD,
        payload : {
            data : data
        }
    }

}


