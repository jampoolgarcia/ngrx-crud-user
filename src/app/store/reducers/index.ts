import { createReducer, createSelector } from '@ngrx/store';
import * as fromUserReducer from './user.reducer';

export interface appState {
    users: fromUserReducer.UserState;
}

export const reducers = {
    users: fromUserReducer.reducer
}

export const selectUsersState = (state: appState) => state.users;

export const selectUsersData = createSelector(
    selectUsersState,
    fromUserReducer.getUsers
)

export const getUserById = (id: number) => createSelector(selectUsersData, (users)=>{
    if(users){
        let userFound = users.find(user => user.id === id);
        return userFound || {};
    }else{
        return {};
    }
})