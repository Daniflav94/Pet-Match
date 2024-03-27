import { useEffect, useState } from "react";
import * as S from "./styles";
import { RegisterPet } from "./components/registerPet";
import { listMyPets } from "../../../services/pet.service";
import { IOrganization } from "../../../interfaces/IOrganization";
import { useNavigate } from "react-router-dom";
import { IPet } from "../../../interfaces/IPet";
import { Card } from "../../../components/card/card";

export function MyPets() {
  const [listPets, setListPets] = useState<IPet[]>([]);
  const [userLogged, setUserLogged] = useState<IOrganization>();

  const navigate = useNavigate();

  useEffect(() => {
    listAll()
  }, [])

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUserLogged(JSON.parse(user));
    } else if (!user || userLogged?.type === "user") {
      navigate("/login");
    }
  }, []);

  async function listAll(){
    const res = await listMyPets(userLogged?.uid as string);

    setListPets(res);
  }

  return (
    <S.Container>
        <RegisterPet user={userLogged} />
      {listPets ? (<div>
        <S.ContainerCards>
              {listPets.map((pet) => (
                <Card key={pet.uid} pet={pet} userLogged={userLogged ? true : false} />
              ))}
            </S.ContainerCards>
      </div>) : 
      (<>
      </>)}
    </S.Container>
  );
}
