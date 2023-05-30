
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import { collection, addDoc, getFirestore, getDocs } from "firebase/firestore";
import { Receta } from "../types/receta";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const saveRecetaInDB = async (product: Receta) => {

    try {
        await addDoc(collection(db, "products"), product);
        return true;
    } catch (e) {
      console.error("Error adding document: ", e);
      return false;
    }
    };


const getRecetaFromDB = async(): Promise<Receta[]> => {
    const resp: Receta[] = [];
    const querySnapshot = await getDocs(collection(db, "recetas"));
    querySnapshot.forEach((doc: { id: any; data: () => Receta; }) => {
  console.log(`${doc.id} => ${doc.data()}`);
  resp.push({...doc.data(),} as Receta);
});
return resp;
}

export default { saveRecetaInDB, getRecetaFromDB };