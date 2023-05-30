import { Receta } from "../types/receta";
import { Actions, SomeActions } from "../types/store";
import firebase from "../utils/firebase";

export const saveReceta = async (receta: Receta): Promise<Actions> => {
  await firebase .saveProductInDB(receta);
    return{
        action: SomeActions.SAVE_RECETA,
        payload: receta,
    };
};

export const getReceta = async (): Promise<Actions> => {
   const recetas = await firebase .getRecetaFromDB();
      return{
          action: SomeActions.GET_RECETA,
          payload: recetas,
      };
  };