import { fork, call, put, delay, take , takeLatest } from 'redux-saga/effects'
// import * as MkeymapType from './../contants/MkeymapActiontypes'
import * as ProductTypes from './../contants/ProductActionTypes'
import * as ProductApi from './../apis/ProductApi'
import { getByProdcutAndStoresSuccess } from './../actions/Product'
import { toast } from 'react-toastify'

// function* mkeymapSaga(){
//     while(true){
//         const action = yield take(MkeymapType.MKEYMAP_GETALL);
//         console.log('mkeymap saga');
//         const resp = yield call(getList);
//         const {status,data} = resp;
//         console.log(resp);
//         if(status === 200){
//             console.log(data);
//             yield put(getAllSuccess(data))
//         }else{
//             yield put()
//         }
//         yield delay(1000);
//     }
// }

function* productSaga(){
    while(true){
        try{
            const { getList } = ProductApi;
            const action = yield take(ProductTypes.PRODUCT_SEARCH);
            const resp = yield call(getList,action.payload.data);
            const { status,data } = resp || null;
            console.log('erros')

            if(status === 200 || status){
                toast.success("Search success : " + data.length() + " items")
                yield put(getByProdcutAndStoresSuccess(data))
            }else{
                console.log('erros')
                yield put()
            }
        }catch(err){
            console.log({err})
            toast.error("Network Error.")
        }
        yield delay(1000);
        
    }
}

function* rootSaga(){
    yield fork(productSaga);
}

export default rootSaga;