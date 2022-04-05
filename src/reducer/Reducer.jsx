import { Types } from "../actionTypes/Types";

export const  initialState = {
    name:"User",
    email:"user@gmail.com"
}

export function userReducer(state=initialState, action) {
    switch (action.type) {
        case Types.CHANGE_NAME:
            return {...state, name:action.payload.name}
        case Types.CHANGE_EMAIL:
            return {...state, name:action.payload.email}            
        default:
            return state;
    }
}