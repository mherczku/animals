import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {animalLoad} from "../../../store/actions/animal.actions";
import {Store} from "@ngrx/store";
import {AnimalGridComponent} from "../../components/animal-grid/animal-grid.component";

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule, AnimalGridComponent],
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.store.dispatch(animalLoad({animalType: "dogs"}))
  }
}
