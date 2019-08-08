import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  
  
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;
}


export type AuthActions = Login;
