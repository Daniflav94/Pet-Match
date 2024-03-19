import * as Dialog from "@radix-ui/react-dialog";
import { Input, RadioGroup, Radio } from "@nextui-org/react";
import { X } from "lucide-react";
import * as S from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { IPet } from "../../../../interfaces/IPet";

type FormAdopt = {
  name: string;
  email: string;
  state: string;
  city: string;
  liveIn: string;
  children: string;
  isFirstPet: string;
  pets: string;
  describePets?: string;
};

interface Props {
  pet: IPet;
}

export function ModalAdopt({pet}: Props) {
  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormAdopt>();

  const onSubmit: SubmitHandler<FormAdopt> = (data) => {
    const dataForm = {
      name: data.name,
      email: data.email,
      state: data.state,
      city: data.city,
      liveIn: data.liveIn,
      children: data.children,
      isFirstPet: data.isFirstPet,
      pets: data.pets,
      describePets: data.describePets,
      pet,
    };
    console.log(dataForm);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="inset-0 fixed bg-black/50" />
      <Dialog.Content>
        <S.Container>
          <Dialog.Close>
            <S.IconClose>
              <X size={25} color="#ABB2BF" />
            </S.IconClose>
          </Dialog.Close>
          <S.Title>Formulário de adoção</S.Title>
          <S.Subtitle>
            Preencha o formulário abaixo com seus dados, a Ong será notificada e
            irá verificar a compatibilidade de seu perfil com o do pet.
          </S.Subtitle>

          <S.PetImage src={pet.photo} />

          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="text"
              label="Nome completo"
              onValueChange={(value) => setValue("name", value)}
              size="sm"
              isRequired
            />

            <Input
              type="email"
              label="Email"
              onValueChange={(value) => setValue("email", value)}
              size="sm"
              isRequired
            />
            <S.DualInput>
              <Input
                type="text"
                label="Estado"
                onValueChange={(value) => setValue("state", value)}
                size="sm"
                isRequired
              />

              <Input
                type="text"
                label="Cidade"
                onValueChange={(value) => setValue("city", value)}
                size="sm"
                isRequired
              />
            </S.DualInput>

            <RadioGroup
              label="Tipo de residência:"
              size="sm"
              color="warning"
              isRequired
              style={{ fontSize: "0.9rem" }}
              onValueChange={(value) => setValue("liveIn", value)}
            >
              <S.DualInput>
                <Radio value="Casa">Casa</Radio>
                <Radio value="Apartamento">Apartamento</Radio>
                <Radio value="Fazenda">Fazenda</Radio>
              </S.DualInput>
            </RadioGroup>

            <RadioGroup
              label="Possui crianças?"
              size="sm"
              color="warning"
              isRequired
              style={{ fontSize: "0.9rem" }}
              onValueChange={(value) => setValue("children", value)}
            >
              <S.DualInput>
                <Radio value="Sim">Sim</Radio>
                <Radio value="Não">Não</Radio>
              </S.DualInput>
            </RadioGroup>

            <RadioGroup
              label="Primeiro pet?"
              size="sm"
              color="warning"
              isRequired
              style={{ fontSize: "0.9rem" }}
              onValueChange={(value) => setValue("isFirstPet", value)}
            >
              <S.DualInput>
                <Radio value="Sim">Sim</Radio>
                <Radio value="Não">Não</Radio>
              </S.DualInput>
            </RadioGroup>

            <RadioGroup
              label="Possui outros animais?"
              size="sm"
              color="warning"
              isRequired
              style={{ fontSize: "0.9rem" }}
              onValueChange={(value) => setValue("pets", value)}
            >
              <S.DualInput>
                <Radio value="Sim">Sim</Radio>
                <Radio value="Não">Não</Radio>
              </S.DualInput>
            </RadioGroup>

            {watch("pets") === "Sim" && (
              <Input
                type="text"
                label="Quais?"
                onValueChange={(value) => setValue("describePets", value)}
                size="sm"
              />
            )}
            <S.ContainerButtons>
              <Dialog.Close>
                <S.ButtonCancel>Cancelar</S.ButtonCancel>
              </Dialog.Close>
              <S.ButtonSubmit type="submit">Enviar</S.ButtonSubmit>
            </S.ContainerButtons>
          </S.Form>
        </S.Container>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
