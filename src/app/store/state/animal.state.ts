import {Animal, PageType} from "../../interface/animal";

export interface AnimalState {
  page: PageType;
  animals: Animal[];
}

export const initAnimalState: AnimalState = {
  page: "none",
  animals: []
}
