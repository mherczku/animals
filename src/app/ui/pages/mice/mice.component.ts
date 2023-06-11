import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalBaseComponent} from "../animal-base.component";
import {animalLoad} from "../../../store/actions/animal.actions";
import {CatRestrictionService} from "../../../service/cat-restriction/cat-restriction.service";
import {AnimalGridComponent} from "../../components/animal-grid/animal-grid.component";

@Component({
  selector: 'app-mice',
  standalone: true,
  imports: [CommonModule, AnimalGridComponent],
  templateUrl: './mice.component.html',
  styleUrls: ['./mice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiceComponent extends AnimalBaseComponent implements OnInit {

  constructor(private readonly catService: CatRestrictionService) {
    super();
  }

  ngOnInit(): void {
    this.catService.makeCatsAvailable();
    this.store.dispatch(animalLoad({animalType: "mice"}))
  }
}
