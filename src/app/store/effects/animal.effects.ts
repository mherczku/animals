import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, map, of, tap, TimeoutError} from "rxjs";
import * as actions from '../actions/animal.actions';
import {HotToastService} from "@ngneat/hot-toast";
import {AnimalService} from "../../service/animal.service";

@Injectable()
export class AnimalEffects {

  constructor(
    private readonly actions$: Actions,
    private readonly animalService: AnimalService,
    private readonly toast: HotToastService
  ) {
  }

  loadAnimalsEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.animalLoad),


      exhaustMap(action =>
        this.animalService.getAnimals(action.animalType).pipe(

          map(response => {
            console.log(`animal ${action.animalType} response:::`, response)
            return actions.animalLoadSuccess({page: action.animalType, animals: response})
          }),

          catchError((error: any) => {
            if(error instanceof TimeoutError) {
              return of(actions.animalLoadFailure({errorMessage: "Network Timeout"}))
            }
            return of(actions.animalLoadFailure({errorMessage: error.toString()}))
          }))
      )
    )
  );

  failureEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.animalLoadFailure),
      tap(failure => {
        console.error(failure.errorMessage)
        this.toast.error(failure.errorMessage)
      })
    )
  );

}
