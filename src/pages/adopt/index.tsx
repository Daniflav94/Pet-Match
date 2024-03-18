import * as S from "./styles";
import { FilterAdopt } from "./components/filter";
import { IFilter } from "../../interfaces/IFilter";
import { IPet } from "../../interfaces/IPet";
import { Card } from "../../components/card/card";
import {
  Pagination,
  PaginationItem,
  PaginationCursor,
} from "@nextui-org/react";

export function Adopt() {
  const pets: IPet[] = [
    {
      id: "1",
      type: "dog",
      name: "Lola",
      age: "Jovem",
      gender: "Fêmea",
      personality: ["Alegre", "Sociável"],
      isAdopt: false,
      isFavorite: false,
      organization: {
        name: "Clube dos Viralatas",
        cnpj: "05.299.525/0001-93",
        photo:
          "https://clubedosviralatas.org.br/wp-content/uploads/2022/12/logocvl99x125px.png",
        email: "contato@clubedosviralatas.org.br",
        telephones: "1199999-4444",
        cep: "09120-000",
        state: "São Paulo",
        city: "Ribeirão Pires",
        street: "hff",
        number: "123",
        openingHours: "Segunda à Sexta: 08h ás 17h, Sábados: 09h ás 13h",
      },
      size: "Médio",
      photo:
        "https://clubedosviralatas.org.br/wp-content/uploads/2023/01/MARRY-1-e1673787775657.jpg",
    },
    {
      id: "2",
      type: "dog",
      name: "Caramelo",
      age: "Adulto",
      gender: "Macho",
      personality: ["Educado", "Carinhoso", "Tranquilo"],
      isAdopt: false,
      isFavorite: false,
      organization: {
        name: "Clube dos Viralatas",
        cnpj: "05.299.525/0001-93",
        photo:
          "https://clubedosviralatas.org.br/wp-content/uploads/2022/12/logocvl99x125px.png",
        email: "contato@clubedosviralatas.org.br",
        telephones: "1199999-4444",
        cep: "09120-000",
        state: "São Paulo",
        city: "Ribeirão Pires",
        street: "hff",
        number: "123",
        openingHours: "Segunda à Sexta: 08h ás 17h, Sábados: 09h ás 13h",
      },
      size: "Pequeno",
      photo:
        "http://clubedosviralatas.org.br/wp-content/uploads/elementor/thumbs/JIMMY-1-q0p3s7q5glmyc0inifxs7koj33cho5p0pjeaqoya1i.jpg",
    },
    {
      id: "3",
      type: "dog",
      name: "Shofie",
      age: "Idoso",
      gender: "Fêmea",
      personality: ["Educada", "Carinhosa"],
      isAdopt: false,
      isFavorite: false,
      organization: {
        name: "Clube dos Viralatas",
        cnpj: "05.299.525/0001-93",
        photo:
          "https://clubedosviralatas.org.br/wp-content/uploads/2022/12/logocvl99x125px.png",
        email: "contato@clubedosviralatas.org.br",
        telephones: "1199999-4444",
        cep: "09120-000",
        state: "São Paulo",
        city: "Ribeirão Pires",
        street: "hff",
        number: "123",
        openingHours: "Segunda à Sexta: 08h ás 17h, Sábados: 09h ás 13h",
      },
      size: "Médio",
      photo:
        "http://clubedosviralatas.org.br/wp-content/uploads/elementor/thumbs/SOFHIE-1-e1673785566979-q0p55hfloz30w6y8t8msen3c16i450aihefjbtwdu8.jpg",
    },
  ];

  async function handleSubmit(filter: IFilter) {
    console.log(filter);
  }

  return (
    <S.Container>
      <FilterAdopt handleSubmit={handleSubmit} />
      <S.ContainerCards>
        {pets.map((pet) => (
          <Card key={pet.id} pet={pet} />
        ))}
      </S.ContainerCards>
      <S.Pagination>
        <Pagination total={10} initialPage={1} color="warning" onChange={(page: number) => console.log(page)} />
      </S.Pagination>
    </S.Container>
  );
}
