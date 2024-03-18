import { IOrganization } from "./IOrganization";
import { IUser } from "./IUser";

export interface IRegister {
    email: string;
    password: string;
    type: 'user' | 'admin';
    data: IUser | IOrganization;
}