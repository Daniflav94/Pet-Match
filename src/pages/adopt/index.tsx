import * as S from "./styles";
import dogIcon from "../../assets/icons/dog.svg";
import catIcon from "../../assets/icons/cat.svg";
import { Select } from "@radix-ui/themes";

export function Adopt() {
  return (
    <S.Container>
      <S.ContainerSearch>
        <h3>Encontre e adote</h3>
        <S.ContainerIcon>
          <S.Icon src={dogIcon} alt="" />
          <S.IconText>Cachorro</S.IconText>
        </S.ContainerIcon>
        <S.ContainerIcon>
          <S.Icon src={catIcon} alt="" />
          <S.IconText>Gato</S.IconText>
        </S.ContainerIcon>
        
        <Select.Root onValueChange={(value) => console.log(value)} size="2">
          <Select.Trigger placeholder="Porte"  />
          <Select.Content color="brown">
            <Select.Group>
              <Select.Item value="small">Pequeno</Select.Item>
              <Select.Item value="medium">Médio</Select.Item>
              <Select.Item value="large">Grande</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>
      </S.ContainerSearch>
    </S.Container>
  );
}
