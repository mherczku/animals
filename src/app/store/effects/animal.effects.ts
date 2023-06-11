import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, exhaustMap, finalize, map, of, takeUntil, tap, timeout, TimeoutError} from "rxjs";
import * as actions from '../actions/animal.actions';
import {HotToastService} from "@ngneat/hot-toast";
import {AnimalService} from "../../service/animal/animal.service";

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

      // Hot Toast Loader:
      tap(action => {
        this.toast.loading(`Loading ${action.animalType}...`, {id: "dataLoader"});
      }),
      exhaustMap(action =>
        this.animalService.getAnimals(action.animalType).pipe(
          // timeout if request takes more than 3 seconds
          timeout(3000),

          map(response => {
            console.log(`animal ${action.animalType} response:::`, response)
            return actions.animalLoadSuccess({page: action.animalType, animals: response})
          }),

          // Close loader when done
          finalize(() => this.toast.close("dataLoader")),

          // to prevent memory leaks
          takeUntil(this.actions$.pipe(
            ofType(actions.animalLoadCancel)
          )),

          catchError((error: any) => {
            if (error instanceof TimeoutError) {
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

      // pure side effect:
    ), {dispatch: false}
  );

}
