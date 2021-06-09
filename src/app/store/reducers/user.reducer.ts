import * as fromUserAction from '../actions/user.action';
import { Action } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export interface UserState{
    data: User[],
    loaded: boolean;
    loading: boolean;
    err: string;
}

export const initialState: UserState = {
    data: [{
        id: 1,
        name: 'jampool',
        age: 27,
        email: 'jampoolgarcia@gmail.com'
    }],
    loaded: false,
    loading: false,
    err: ''
}

export function reducer(state: UserState = initialState, action: Action){

        switch(action.type){
            case fromUserAction.LOAD_USERS:{
                return {
                    ...state,
                    loading: true
                }
            }

            default: {
                return state;
            }
        }
}