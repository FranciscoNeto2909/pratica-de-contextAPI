import { Types } from "../actionTypes/Types";

export const  initialState = {
    name:"User",
    email:"user@gmail.com",
    loged:false
}

export function userReducer(state=initialState, action) {
    switch (action.type) {
        case Types.CHANGE_NAME:
            return {...state, name:action.payload.name}
        case Types.CHANGE_EMAIL:
            return {...state, name:action.payload.email}
        case Types.LOGIN:
            return {...state, loged:true}
        case Types.LOGOUT:
            return{...state, loged:false}             
        default:
            return state;
    }
}