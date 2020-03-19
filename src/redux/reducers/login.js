import {SAVE_USER_INFO,DELETE_USER_INFO} from '../action-types'
let _user = JSON.parse(localStorage.getItem('user'))
let _token = localStorage.getItem('token')

let initState ={
    user:_user||{},
    token:_token|| '',
    isLogin: _user&&_token ? true:false
}
export default function (preState=initState,action) {
    const {type,data} = action
    let newState
    switch (type) {
        case SAVE_USER_INFO:
            const {user,token} =data
            newState = {user,token,isLogin:true}
            return newState
        case DELETE_USER_INFO:
            newState = {user:{},token:'',isLogin:false}
            return newState
        default:
            return preState;
    }
  }
