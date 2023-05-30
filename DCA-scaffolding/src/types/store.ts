import { Receta } from "./receta";

export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  products: Receta[];
};

export enum SomeActions {
  "SAVE_RECETA" = "SAVE_RECETA",
  "GET_RECETA" = "GET_RECETA",
}

export interface SaveRecetaAction {
  action: SomeActions.SAVE_RECETA;
  payload: Receta;
}
export interface GetRecetaAction {
  action: SomeActions.GET_RECETA;
  payload: Receta[];
}

export type Actions = SaveRecetaAction | GetRecetaAction;

