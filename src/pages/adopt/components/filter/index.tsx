import * as S from "./styles";
import dogIcon from "../../../../assets/icons/dog.svg";
import catIcon from "../../../../assets/icons/cat.svg";
import { useEffect, useState } from "react";
import { SelectInput } from "../../../../components/select";
import { getListCities, getListStates } from "../../../../services/apiIBGE";
import { IFilter } from "../../../../interfaces/IFilter";

export interface State {
  id: number;
  nome: string;
  sigla: string;
}

export interface City {
  id: number;
  nome: string;
}

export interface Props {
  handleSubmit(filter: IFilter): void;
}

export function FilterAdopt(props: Props) {
  const [typePet, setTypePet] = useState<string>();
  const [size, setSize] = useState<string>();
  const [age, setAge] = useState<string>();
  const [gender, setGender] = useState<string>();
  const [state, setState] = useState<string>();
  const [city, setCity] = useState<string>();
  const [listStates, setListStates] = useState([]);
  const [listCities, setListCities] = useState([]);

  async function getStates() {
    const res = await getListStates();

    if (res) {
      const states = res.map((state: State) => {
        return { value: state.sigla, name: state.nome };
      });

      setListStates(states);
    }
  }

  async function getCities(state: string) {
    setState(state);
    const res = await getListCities(state);

    const cities = res.map((city: City) => {
      return { value: city.nome, name: city.nome };
    });

    if (res) {
      setListCities(cities);
    }
  }

  useEffect(() => {
    getStates();
  }, []);

  return (
      <S.ContainerSearch>
        <S.H3>Encontre e adote</S.H3>
        <S.ContainerIcons>
          <S.ContentIcon
            onClick={() => setTypePet("dog")}
            style={
              typePet === "dog"
                ? { border: "1px solid #ECB159" }
                : { border: "none" }
            }
          >
            <S.Icon src={dogIcon} alt="" />
            <S.IconText>Cachorro</S.IconText>
          </S.ContentIcon>

          <S.ContentIcon
            onClick={() => setTypePet("cat")}
            style={
              typePet === "cat"
                ? { border: "1px solid #ECB159" }
                : { border: "none" }
            }
          >
            <S.Icon src={catIcon} alt="" />
            <S.IconText>Gato</S.IconText>
          </S.ContentIcon>
        </S.ContainerIcons>

        <S.ContainerSelect>
          <S.TitleSelect>Características </S.TitleSelect>
          <S.ContentSelect>
            <SelectInput
              onChange={setSize}
              placeholder="Porte"
              listItems={[
                { value: "Pequeno", name: "Pequeno" },
                { value: "Médio", name: "Médio" },
                { value: "Grande", name: "Grande" },
              ]}
            />

            <SelectInput
              onChange={setAge}
              placeholder="Idade"
              listItems={[
                { value: "Filhote", name: "Filhote" },
                { value: "Jovem", name: "Jovem" },
                { value: "Adulto", name: "Adulto" },
                { value: "Idoso", name: "Idoso" },
              ]}
            />

            <SelectInput
              onChange={setGender}
              placeholder="Sexo"
              listItems={[
                { value: "Macho", name: "Macho" },
                { value: "Fêmea", name: "Fêmea" },
              ]}
            />
          </S.ContentSelect>
        </S.ContainerSelect>

        <S.ContainerSelect>
          <S.TitleSelect>Localização </S.TitleSelect>
          <S.ContentSelect>
            <SelectInput
              onChange={getCities}
              placeholder="Estado"
              listItems={listStates}
            />

            <SelectInput
              onChange={setCity}
              placeholder="Cidade"
              listItems={listCities}
            />
          </S.ContentSelect>
        </S.ContainerSelect>

        <S.Button
          onClick={() =>
            props.handleSubmit({
              type: typePet,
              size,
              age,
              gender,
              state,
              city,
            })
          }
        >
          Filtrar
        </S.Button>
      </S.ContainerSearch>
  );
}
