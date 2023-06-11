import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {CatRestrictionService} from "../../../service/cat-restriction/cat-restriction.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isCatAvailable$ = this.catService.watchCatAvailable();

  constructor(private readonly catService: CatRestrictionService) {
  }
}
