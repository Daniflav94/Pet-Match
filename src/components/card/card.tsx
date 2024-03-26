import { IPet } from "../../interfaces/IPet";
import * as S from "./styles";
import dogicon from "../../assets/icons/dog-running.png";
import caticon from "../../assets/icons/gato.png";
import paw from "../../assets/icons/pata.png";
import gender from "../../assets/icons/genero.png";
import heart from "../../assets/icons/coracao1.png";
import heartFilled from "../../assets/icons/coracao2.png";
import * as Dialog from "@radix-ui/react-dialog";

import { motion } from "framer-motion";
import { useState } from "react";
import { ModalAdopt } from "../../pages/adopt/components/modalAdopt";

interface Props {
  pet: IPet;
  userLogged: boolean;
}

export function Card({ pet, userLogged }: Props) {
  const [isFavorite, setIsFavorite] = useState(pet.isFavorite);
  const [isFormSent, setIsFormSent] = useState(false);

  return (
    <Dialog.Root>
      <S.ContainerCard>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ position: "absolute", top: "1rem", left: "1rem" }}
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <S.IconHeart src={isFavorite ? heartFilled : heart} />
        </motion.button>

        <S.Image src={pet.photo} alt="" />
        <S.Title>{pet.name}</S.Title>
        <S.ContentCard>
          <S.ContainerItem>
            <S.Icon src={pet.type === "dog" ? dogicon : caticon} />
            <S.Text>{pet.size}</S.Text>
          </S.ContainerItem>
          <S.ContainerItem>
            <S.Icon src={paw} />
            <S.Text>{pet.age}</S.Text>
          </S.ContainerItem>
          <S.ContainerItem>
            <S.Icon src={gender} />
            <S.Text>{pet.gender}</S.Text>
          </S.ContainerItem>
          <S.ContainerPersonality>
            {pet.personality.map((item, index) => (
              <S.ItemPersonality key={index}>{item}</S.ItemPersonality>
            ))}
          </S.ContainerPersonality>
          <S.Button2>Apadrinhar</S.Button2>
        </S.ContentCard>
        {!isFormSent && userLogged && (
          <Dialog.Trigger>
            <S.Button>Adotar</S.Button>
          </Dialog.Trigger>
        )}
        {!isFormSent && !userLogged && <S.Button>Adotar</S.Button>}
        {isFormSent && <S.ButtonDisabled>Adoção solicitada</S.ButtonDisabled>}
      </S.ContainerCard>
      <ModalAdopt pet={pet} setIsFormSent={setIsFormSent} />
    </Dialog.Root>
  );
}
