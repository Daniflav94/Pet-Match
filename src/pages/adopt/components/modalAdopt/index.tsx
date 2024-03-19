import * as Dialog from "@radix-ui/react-dialog";
import { Input, RadioGroup, Radio } from "@nextui-org/react";
import { X } from "lucide-react";
import * as S from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IPet } from "../../../../interfaces/IPet";
import { useMemo, useState } from "react";
import { SuccessMessage } from "../successMessage/successMessage";

type FormAdopt = {
  name: string;
  birthdate: Date;
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

export function ModalAdopt({ pet }: Props) {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const schema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        birthdate: yup.date().required(),
        email: yup
          .string()
          .email("Insira um formato de email válido")
          .required("Campo obrigatório"),
        state: yup.string().required("Campo obrigatório"),
        city: yup.string().required("Campo obrigatório"),
        liveIn: yup.string().required("Campo obrigatório"),
        children: yup.string().required("Campo obrigatório"),
        isFirstPet: yup.string().required("Campo obrigatório"),
        pets: yup.string().required("Campo obrigatório"),
        describePets: yup.string().optional(),
      }),
    []
  );

  const {
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormAdopt>({ resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<FormAdopt> = (data) => {
    setError("");

    const dataForm = {
      name: data.name,
      email: data.email,
      birthdate: data.birthdate,
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
    setSuccess(true);
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
          {!success ? (
            <>
              <S.Title>Formulário de adoção</S.Title>
              <S.Subtitle>
                Preencha o formulário abaixo com seus dados, a Ong será
                notificada e irá verificar a compatibilidade de seu perfil com o
                do pet.
              </S.Subtitle>

              <S.PetImage src={pet.photo} />
              <S.NamePet>{pet.name}</S.NamePet>

              <S.Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                  type="text"
                  label="Nome completo"
                  onValueChange={(value) => setValue("name", value)}
                  size="sm"
                  color={errors.name ? "danger" : "default"}
                  isRequired
                />
                <S.DualInput>
                  <Input
                    type="text"
                    label="Email"
                    onValueChange={(value) => setValue("email", value)}
                    size="sm"
                    color={errors.email ? "danger" : "default"}
                    isRequired
                    errorMessage={errors.email?.message}
                  />

                  <Input
                    type="date"
                    label="Data de nascimento"
                    onValueChange={(value) =>
                      setValue("birthdate", new Date(value))
                    }
                    size="sm"
                    color={errors.birthdate ? "danger" : "default"}
                    isRequired
                  />
                </S.DualInput>

                <S.DualInput>
                  <Input
                    type="text"
                    label="Estado"
                    onValueChange={(value) => setValue("state", value)}
                    size="sm"
                    color={errors.state ? "danger" : "default"}
                    isRequired
                  />

                  <Input
                    type="text"
                    label="Cidade"
                    onValueChange={(value) => setValue("city", value)}
                    size="sm"
                    color={errors.city ? "danger" : "default"}
                    isRequired
                  />
                </S.DualInput>

                <RadioGroup
                  label="Tipo de residência:"
                  size="sm"
                  color="warning"
                  style={{ fontSize: "0.9rem" }}
                  onValueChange={(value) => setValue("liveIn", value)}
                  isRequired
                  errorMessage={errors.liveIn?.message}
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
                  style={{ fontSize: "0.9rem" }}
                  onValueChange={(value) => setValue("children", value)}
                  isRequired
                  errorMessage={errors.children?.message}
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
                  style={{ fontSize: "0.9rem" }}
                  onValueChange={(value) => setValue("isFirstPet", value)}
                  isRequired
                  errorMessage={errors.isFirstPet?.message}
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
                  style={{ fontSize: "0.9rem" }}
                  onValueChange={(value) => setValue("pets", value)}
                  isRequired
                  errorMessage={errors.pets?.message}
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
                {errors && (
                  <S.ErrorMessage>{errors.root?.message}</S.ErrorMessage>
                )}
                {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
                <S.ContainerButtons>
                  <Dialog.Close>
                    <S.ButtonCancel>Cancelar</S.ButtonCancel>
                  </Dialog.Close>
                  <S.ButtonSubmit type="submit">Enviar</S.ButtonSubmit>
                </S.ContainerButtons>
              </S.Form>
            </>
          ) : (
            <SuccessMessage />
          )}
        </S.Container>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
