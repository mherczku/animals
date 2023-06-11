import {createReducer, on} from "@ngrx/store";
import {initAnimalState} from "../state/animal.state";
import * as actions from "../actions/animal.actions"


export const animalReducer = createReducer(
  initAnimalState,
  on(actions.animalLoad, (state, {animalType}) => (
    {
      ...state,
      page: animalType,
    }
  )),

  on(actions.animalLoadSuccess, (state, {animals, page}) => (
    {
      ...state,
      animals: animals,
      page: page,
    }
  )),

  on(actions.animalLoadFailure, (state) => (
    {
      ...state,
      animals: [],
    }
  ))
)
