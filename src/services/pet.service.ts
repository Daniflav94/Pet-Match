import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { IPet } from "../interfaces/IPet";

function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
  }

export const createPet = async (pet: IPet) => {
    try {
      const savePet = await addDoc(collection(db, "pets"), pet);
  
      return savePet;
    } catch (error) {
      console.log(getErrorMessage(error));
    }
};