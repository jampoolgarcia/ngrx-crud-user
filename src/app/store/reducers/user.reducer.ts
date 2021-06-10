import * as fromUserAction from '../actions/user.action';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export interface UserState{
    data: User[],
    loaded: boolean;
    loading: boolean;
    err: string;
}

export const initialState: UserState = {
    data: [],
    loaded: false,
    loading: false,
    err: ''
}

export const userReducer = createReducer(
    initialState,
    on(fromUserAction.loadUsers, state => ({
        ...state,
        loading: true
    })),
    on(fromUserAction.loadUserSuccess, (state, { users }) => ({
        ...state,
        data: users
    })),
    on(fromUserAction.loadUserFail, (state, { err }) => ({
        ...state,
        loading: false,
        loaded: false,
        err
    }))
)

export function reducer(state: UserState | undefined, action: Action){
    return userReducer(state, action);
}

export const getUsers = (state: UserState) => state.data;
export const getUsersLoaded = (state: UserState) => state.loaded;
export const getUsersLoading = (state: UserState) => state.loading;
export const getUsersError = (state: UserState) => state.err;