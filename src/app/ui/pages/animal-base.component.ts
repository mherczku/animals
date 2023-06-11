import {ChangeDetectionStrategy, Component, inject, OnDestroy} from "@angular/core";
import {Store} from "@ngrx/store";
import {animalLoadCancel} from "../../store/actions/animal.actions";


@Component({
  standalone: true,
  template: "",
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalBaseComponent implements OnDestroy {

  protected readonly store: Store = inject(Store);

  ngOnDestroy(): void {
    // to prevent memory leaks - dispatch this action
    // BaseComponent to prevent code repeat
    this.store.dispatch(animalLoadCancel())
  }

}
