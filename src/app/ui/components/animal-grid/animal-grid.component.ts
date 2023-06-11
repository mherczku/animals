import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AnimalCardComponent} from "../animal-card/animal-card.component";
import {Store} from "@ngrx/store";
import {selectAnimals} from "../../../store/selectors/animal.selector";

@Component({
  selector: 'app-animal-grid',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent],
  templateUrl: './animal-grid.component.html',
  styleUrls: ['./animal-grid.component.scss']
})
export class AnimalGridComponent {

  animals = this.store.select(selectAnimals);

  constructor(private readonly store: Store) {
  }
}
