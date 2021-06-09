import {Action, createAction, props} from '@ngrx/store';

export const LOAD_USERS = '[User] load users';
export const ENGLISH = '[mensaje] English';

export const loadUsers = createAction(
    LOAD_USERS
)

export class LoadUsers implements Action{
    readonly type = LOAD_USERS;
}

export type UserActions = LoadUsers;