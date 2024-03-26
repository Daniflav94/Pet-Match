export interface IUser {
    uid?: string;
    name: string;
    cpf: string;
    birthdate: Date;
    gender: string;
    email: string;
    phone: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    neighborhood: string;
    type?: string;
}