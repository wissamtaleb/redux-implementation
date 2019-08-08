import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthActionTypes } from '../auth.actions';


export interface AppState {

  login: LoginState
}

type LoginState = {
  loggedIn: boolean

}

export function myReducer(state: LoginState, action){

  switch(action.type){
    case AuthActionTypes.Login : {
      
      return {...state, loggedIn: true}
    }
  }

  return state;
}

export const reducers: ActionReducerMap<AppState> = {

  login: myReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
