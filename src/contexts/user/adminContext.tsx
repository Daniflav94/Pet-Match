import React, { useState, createContext } from "react";
import { IOrganization } from "../../interfaces/IOrganization";

interface IAdminContext {
    admin: IOrganization;
    setAdmin: React.Dispatch<React.SetStateAction<IOrganization>>;
}

const DEFAULT_VALUE = {
  admin: {
    name: "",
    cnpj: "",
    email: "",
    cel: "",
    cep: "",
    state: "",
    city: "",
    street: "",
    number: "",
    neighborhood: "",
    openingHours: "",
},
  setAdmin: () => {},
}

interface AdminProviderProps {
    children: React.ReactNode
}

export const AdminContext = createContext<IAdminContext>(DEFAULT_VALUE);

const AdminContextProvider: React.FC<AdminProviderProps> = ({children}) => {
  const [admin, setAdmin] = useState(DEFAULT_VALUE.admin);

  return (
   <AdminContext.Provider value={{
    admin,
    setAdmin,
   }}>
   {children}
   </AdminContext.Provider>
  );
};

export {AdminContextProvider};
export default AdminContext;
