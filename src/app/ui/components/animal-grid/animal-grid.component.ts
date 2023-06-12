import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalCardComponent} from "../animal-card/animal-card.component";
import {Store} from "@ngrx/store";
import {selectAnimals} from "../../../store/selectors/animal.selector";
import {tap} from "rxjs";

@Component({
  selector: 'app-animal-grid',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent],
  templateUrl: './animal-grid.component.html',
  styleUrls: ['./animal-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalGridComponent {

  count = 0;
  animals$ = this.store.select(selectAnimals).pipe(tap(animals => {
      this.count = animals.length
    }
  ))

  constructor(private readonly store: Store) {
  }
}
