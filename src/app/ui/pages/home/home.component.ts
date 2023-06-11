import {ChangeDetectionStrategy, Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnimalCardComponent} from "../../components/animal-card/animal-card.component";
import {RouterLink} from "@angular/router";
import {Animal} from "../../../interface/animal";
import {CatRestrictionService} from "../../../service/cat-restriction/cat-restriction.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AnimalCardComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  isCatAvailable$ = this.catService.watchCatAvailable();

  constructor(private readonly catService: CatRestrictionService) {
  }

  animalTypes: Animal[] = [
    {
      url: "https://images.dog.ceo/breeds/collie-border/n02106166_3416.jpg",
      name: "Dogs"
    },
    {
      url: "assets/image/cats.png",
      name: "Cats"
    },
    {
      url: "assets/image/mice.png",
      name: "Mice"
    },
  ]
}
