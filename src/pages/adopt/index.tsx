import * as S from "./styles";
import { FilterAdopt } from "./components/filter";
import { IFilter } from "../../interfaces/IFilter";
import { IPet } from "../../interfaces/IPet";
import { Card } from "../../components/card/card";
import { Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ModalLoginRequired } from "./components/modalLoginRequired";
import * as Dialog from "@radix-ui/react-dialog";
import background from "../../assets/images/fundo.png";

export function Adopt() {
  const pets: IPet[] = [
   
  ];

  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUserLogged(true);
    }
  }, []);

  async function handleSubmit(filter: IFilter) {
    console.log(filter);
  }

  return (
    <Dialog.Root>
      <S.Container>
       
        <FilterAdopt handleSubmit={handleSubmit} />
        <S.Background image={background} />
        {!userLogged ? (
          <Dialog.Trigger>
            <S.ContainerCards>
              {pets.map((pet) => (
                <Card key={pet.id} pet={pet} userLogged={userLogged} />
              ))}
            </S.ContainerCards>
          </Dialog.Trigger>
        ) : (
          <S.ContainerCards>
            {pets.map((pet) => (
              <Card key={pet.id} pet={pet} userLogged={userLogged} />
            ))}
          </S.ContainerCards>
        )}

        <S.Pagination>
          <Pagination
            total={10}
            initialPage={1}
            color="warning"
            onChange={(page: number) => console.log(page)}
          />
        </S.Pagination>
      </S.Container>
      <ModalLoginRequired />
    </Dialog.Root>
  );
}
