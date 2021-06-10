import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UserService } from 'src/app/services/user.service';
import * as fromUserActions from '../actions/user.action';

@Injectable()
export class UserEffect {

    loadUSers$ = createEffect(() => this.actions$.pipe(
        ofType(fromUserActions.LOAD_USERS),
        mergeMap(() => this._service.getRecords()
            .pipe(
                map(res => { 
                    return fromUserActions.loadUserSuccess({users: res})
                },
                catchError(err => of(fromUserActions.loadUserFail(err))),
                )
            )
        )
    ));


    constructor(
        private actions$: Actions, 
        private _service: UserService){}
}