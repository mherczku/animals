import {createAction, props} from '@ngrx/store';
import {Animal, AnimalType, PageType} from "../../interface/animal";

export const ANIMAL_LOAD = '[Animals Page] Load';
export const ANIMAL_LOAD_SUCCESS = '[Animals Page] Load Success';
export const ANIMAL_LOAD_FAILURE = '[Animals Page] Load Failure';
export const ANIMAL_LOAD_CANCEL = '[Animals Page] Load Cancel';

export const animalLoad = createAction(
  ANIMAL_LOAD,
  props<{ animalType: AnimalType }>()
);

export const animalLoadSuccess = createAction(
  ANIMAL_LOAD_SUCCESS,
  props<{ page: PageType, animals: Animal[] }>()
)

export const animalLoadFailure = createAction(
  ANIMAL_LOAD_FAILURE,
  props<{ errorMessage: string }>()
)

export const animalLoadCancel = createAction(
  ANIMAL_LOAD_CANCEL
)
