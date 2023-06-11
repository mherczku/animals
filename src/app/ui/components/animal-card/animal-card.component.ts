import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Animal} from "../../../interface/animal";

@Component({
  selector: 'app-animal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss']
})
export class AnimalCardComponent {
  @Input() animal: Animal = {
    url: "assets/image/mouse1.png",
    name: "Example Animal"
  }
}
