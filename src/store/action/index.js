import {SAVE_USER,CLEAR,PROFILE_IMAGE,SELECT_LANGUAGE} from './actionTypes'

export const saveUserData = data => ({
    type: SAVE_USER,
    payload: data
  });



  export const saveUserProfile = data => ({
    type: PROFILE_IMAGE,
    payload: data
  });

  export const saveUserLanguage = data => ({
    type: SELECT_LANGUAGE,
    payload: data
  });




  export const clear = () => ({
    type: CLEAR
  });