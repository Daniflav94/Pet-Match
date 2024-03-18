export interface IOrganization {
    id?: string;
    email: string;
    telephones: string[];
    cnpj: string;
    name: string;
    photo: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    openingHours: string;
}