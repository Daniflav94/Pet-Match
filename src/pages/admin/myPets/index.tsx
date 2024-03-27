import { useState } from "react";
import * as S from "./styles";
import { RegisterPet } from "./components/registerPet";

export function MyPets() {
  const [listPets, setListPets] = useState();

  return (
    <S.Container>
        <RegisterPet/>
      {listPets ? (<h2>Meus pets cadastrados</h2>) : 
      (<>
      </>)}
    </S.Container>
  );
}
