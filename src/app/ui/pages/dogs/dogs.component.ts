import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {animalLoad} from "../../../store/actions/animal.actions";
import {AnimalGridComponent} from "../../components/animal-grid/animal-grid.component";
import {AnimalBaseComponent} from "../animal-base.component";

@Component({
  selector: 'app-dogs',
  standalone: true,
  imports: [CommonModule, AnimalGridComponent],
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DogsComponent extends AnimalBaseComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(animalLoad({animalType: "dogs"}))
  }

}
