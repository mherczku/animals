import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {animalLoad} from "../../../store/actions/animal.actions";
import {AnimalBaseComponent} from "../animal-base.component";
import {AnimalGridComponent} from "../../components/animal-grid/animal-grid.component";

@Component({
  selector: 'app-cats',
  standalone: true,
  imports: [CommonModule, AnimalGridComponent],
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsComponent extends AnimalBaseComponent implements OnInit {
  ngOnInit(): void {
    this.store.dispatch(animalLoad({animalType: "cats"}))
  }

}


