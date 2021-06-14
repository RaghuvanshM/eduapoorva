import {SELECT_LANGUAGE} from '../action/actionTypes'

const initialState = {};

export const userSelectedLang = (state = initialState, action) => {
    switch (action.type) {
    
            case SELECT_LANGUAGE:
            return action.payload;

          default:
            return state;
    }
}