import {SAVE_CATEGORY_LIST} from '../action-types'

export default function(preState=[],action){
    const {type,data} = action
    let newState
    switch (type) {
        case SAVE_CATEGORY_LIST:
           newState=[...data.reverse()] 
            return newState
        default:
            return preState
    }
}