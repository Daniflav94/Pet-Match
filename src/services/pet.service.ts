import { db } from "../firebase/config";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
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

export const listMyPets = async (uidUser: string) => {
  let res: any[] = [];
  const q = query(
    collection(db, "pets"),
    where("organization.uid", "==", uidUser)
  );
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    res.push(item.data());
    console.log(res)
  });

  return res;
};
