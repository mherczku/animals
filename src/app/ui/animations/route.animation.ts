import {transition, trigger} from "@angular/animations";
import {fadeAnimation} from "./fade.animation";

export const routeAnimations =
  trigger("routeAnimations", [
    transition("* <=> *", fadeAnimation)
  ]);
