import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import {userSelectedLang} from "./userSelectedLang";


export default combineReducers({ 
    user: userReducer,
    selectedLang:userSelectedLang,

   
})