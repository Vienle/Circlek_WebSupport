import * as Types from './../contants/ProductActionTypes'


const initialState = {
    ListProduct : [],
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case Types.PRODUCT_SEARCH:
            console.log('Types.PRODUCT_SEARCH',action)
            return{
                ...state,
                ListProduct : []
            };
        case Types.PRODUCT_SEARCH_SUCCESSS:
            console.log('Types.PRODUCT_SEARCH_SUCCESSS',action)
            return{
                ...state,
                ListProduct : action.payload.data
            }
        default:
            return state;
    }
}


export default reducer;