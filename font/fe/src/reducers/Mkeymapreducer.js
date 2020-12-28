import * as Types from './../contants/MkeymapActiontypes'

const initialState = {
    listMkeymap : [],
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case Types.MKEYMAP_GETALL:
            return{
                ...state,
                listMkeymap : []
            };
        case Types.MKEYMAP_GETALL_SUCCESS:
            console.log(action.payload.data)
            return{
                ...state,
                listMkeymap : action.payload.data
            }
        default:
            return state;
    }
}


export default reducer;