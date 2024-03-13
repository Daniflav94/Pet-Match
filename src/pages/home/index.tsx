import pet from "../../assets/images/dog.png";
import {
  Section,
  Pet,
  Div,
  Div2,
  Title,
  Title2,
  H2,
  Divider,
  Icon,
  ContainerIcons,
  ContentIcons,
  Text,
  Description
} from "./styles";
import findPet from "../../assets/icons/cat-search.svg";
import requestPet from "../../assets/icons/cat-request.svg";
import form from "../../assets/icons/form-adopt.svg";
import addPet from "../../assets/icons/cat-add.svg";

export function Home() {
  return (
    <Section>
      <Div>
        <Title>Não compre.</Title>
        <Title2>&nbsp;Adote!</Title2>
      </Div>
      <Div2>
        <H2>Como funciona</H2>
        <ContainerIcons>
          <ContentIcons>
            <Icon src={findPet} alt="" />
            <Text>Encontre seu pet</Text>
            <Description>Navegue em nossa galeria de pets e encontre o pet ideal para você. Todos são castrados e vacinados.</Description>
          </ContentIcons>

          <Divider></Divider>
          <ContentIcons>
            <Icon src={requestPet} alt="" />
            <Text>Conheça seu pet</Text>
            <Description>Após solicitar adoção, aguarde resposta da ONG com as informações para conhecer o pet.</Description>
          </ContentIcons>

          <Divider></Divider>
          <ContentIcons>
            <Icon src={form} alt="" />
            <Text>Preencha o formulário de adoção</Text>
            <Description>Finalize o processo de adoção e receba todas as informações necessárias.</Description>
          </ContentIcons>

          <Divider></Divider>
          <ContentIcons>
            <Icon src={addPet} alt="" />
            <Text>Adicione o pet a sua família</Text>
            <Description>Agora é só aproveitar a companhia do seu novo amigo.</Description>
          </ContentIcons>
        </ContainerIcons>
      </Div2>

      <Pet src={pet} alt="" />
    </Section>
  );
}
