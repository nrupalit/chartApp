import React from "react";
import { LOGIN, LOGOUT } from "./constants/actionTypes";

const initialState = {
    list: []
}

const Reducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN:
           return {
               ...state,
               ...action.payload
           }
        case LOGOUT:
            return {
                ...state,
                ...action.payload
            }
        default: {
            return state;
        }
    }
}

export default Reducer;