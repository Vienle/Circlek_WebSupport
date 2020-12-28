  
import { combineReducers } from 'redux'
import MkeymaprRe from './Mkeymapreducer'
import product from './ProductReducer'

const rootReducer = combineReducers({
    mkeymap : MkeymaprRe,
    product
});

export default rootReducer;