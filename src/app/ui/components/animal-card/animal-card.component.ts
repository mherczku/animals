import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Animal} from "../../../interface/animal";

@Component({
  selector: 'app-animal-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animal-card.component.html',
  styleUrls: ['./animal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnimalCardComponent {
  @Input({required: true}) animal: Animal = {
    url: "assets/image/mouse1.png",
    name: "Example Animal"
  }
}
