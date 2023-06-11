import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChildrenOutletContexts} from "@angular/router";
import {routeAnimations} from "./ui/animations/route.animation";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'Animals';

  constructor(private contexts: ChildrenOutletContexts) {
  }

  get getRouteAnimationData(): string {
    return this.contexts.getContext("primary")?.route?.snapshot?.data?.["animation"];
  }
}
