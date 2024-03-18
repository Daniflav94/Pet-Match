import { IOrganization } from "./IOrganization";

export interface IPet {
    id?: string;
    type: "dog" | "cat";
    name: string;
    age: string;
    gender: string;
    size: string;
    photo: string;
    isFavorite: boolean;
    isAdopt: boolean;
    personality: string[];
    organization: IOrganization;
}