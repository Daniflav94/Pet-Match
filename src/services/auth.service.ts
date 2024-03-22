import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  UserCredential,
} from "firebase/auth";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { IRegister } from "../interfaces/IRegister";
import { IUser } from "../interfaces/IUser";
import { IOrganization } from "../interfaces/IOrganization";

const auth = getAuth();

const register = async (data: IRegister): Promise<IUser | IOrganization | undefined> => {

  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      data.data.email,
      data.password
    );

    await updateProfile(user, {
      displayName: data.data.name,
    });

    const userSaved = { ...data.data, uid: user.uid, type: data.type };
    await createUser(userSaved);

    return userSaved;
  } catch (error) {
    console.log(error);
    console.log(typeof error);
  
  }
};

const createUser = async (user: IUser | IOrganization) => {
  try {
    const saveUser = await addDoc(collection(db, "users"), user);

    return saveUser;
  } catch (error) {
    console.log(error);
  }
};

export const authService = {
  register,
};
