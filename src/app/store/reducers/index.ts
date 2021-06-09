import * as fromUserReducer from './user.reducer';

export interface appState {
    users: fromUserReducer.UserState;
}

export const reducers = {
    users: fromUserReducer.reducer
}