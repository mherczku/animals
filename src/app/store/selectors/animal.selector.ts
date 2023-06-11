import {createFeatureSelector, createSelector} from "@ngrx/store";
import {AnimalState} from "../state/animal.state";

export const selectAnimalState = createFeatureSelector<AnimalState>('animals');

export const selectAnimals = createSelector(
  selectAnimalState,
  (state: AnimalState) => state.animals
)
