import { IOrganization } from "./IOrganization";

export interface IPet {
    id?: string;
    name: string;
    age: string;
    gender: string;
    size: string;
    photo: string;
    isFavorite: boolean;
    isAdopt: boolean;
    organization: IOrganization;
}