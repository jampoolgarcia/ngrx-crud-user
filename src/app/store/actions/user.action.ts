import {createAction, props} from '@ngrx/store';
import { User } from 'src/app/model/user.model';

export const LOAD_USERS = '[User] load users';
export const LOAD_USERS_SUCCESS = '[User] load users success';
export const LOAD_USERS_FAIL = '[User] load users fail';

// load
export const loadUsers = createAction(
    LOAD_USERS
)

// load success
export const loadUserSuccess = createAction(
    LOAD_USERS_SUCCESS,
    props<{users: User[]}>()
)

// load fail
export const loadUserFail = createAction(
    LOAD_USERS_FAIL,
    props<{ err: any}>()
)
