import * as MkeymapTypes from './../contants/MkeymapActiontypes'

export const getAll = () =>{
    return {
        type : MkeymapTypes.MKEYMAP_GETALL,
    }
}

export const getAllSuccess = (data) => {
    return{
        type : MkeymapTypes.MKEYMAP_GETALL_SUCCESS,
        payload : {
            data : data
        }
    }

}

export const getAllFaild = (data) => {
    return{
        type : MkeymapTypes.MKEYMAP_GETALL_FAILD,
        payload : {
            data : data
        }
    }

}


