import React, { useState, createContext } from "react";
import { IUser } from "../../interfaces/IUser";

interface IUserContext {
    user: IUser;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const DEFAULT_VALUE = {
  user: {
    name: "",
    cpf: "",
    birthdate: new Date(),
    gender: "",
    email: "",
    phone: "",
    cep: "",
    state: "",
    city: "",
    street: "",
    neighborhood: "",
},
  setUser: () => {},
}

interface UserProviderProps {
    children: React.ReactNode
}

export const UserContext = createContext<IUserContext>(DEFAULT_VALUE);

const UserContextProvider: React.FC<UserProviderProps> = ({children}) => {
  const [user, setUser] = useState(DEFAULT_VALUE.user);

  return (
   <UserContext.Provider value={{
    user,
    setUser,
   }}>
   {children}
   </UserContext.Provider>
  );
};

export {UserContextProvider};
export default UserContext;
