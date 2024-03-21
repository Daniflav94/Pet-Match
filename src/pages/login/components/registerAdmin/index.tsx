import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "../styles";
import { IUser } from "../../../../interfaces/IUser";
import { InputCustom } from "../../../../components/input";
import { EyeIcon, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { IOrganization } from "../../../../interfaces/IOrganization";
import {
  normalizeCepNumber,
  normalizeCnpjNumber,
  normalizeCpfNumber,
  normalizePhoneNumber,
} from "../../../../masks/mask";
import { getDataCep } from "../../../../services/viaCep";

interface SignUpAdmin extends IOrganization {
  password: string;
  confirmPassword: string;
}

type Props = {
  type: string;
};

type DataCep = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export function RegisterAdmin({ type }: Props) {
  const {
    handleSubmit,
    watch,
    setValue,
    register,
    control,
    formState: { errors },
  } = useForm<SignUpAdmin>();

  const [isVisible, setIsVisible] = useState(false);

  const cellPhoneValue = watch("cel");
  const phoneValue = watch("phone");
  const cnpjValue = watch("cnpj");
  const cepValue = watch("cep");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<SignUpAdmin> = (data) => {
    console.log(data)
  };

  const getAdressByCep = async (cep: string) => {
    const res: DataCep = await getDataCep(cep);

    setValue("street", res.logradouro);
    setValue("neighborhood", res.bairro);
    setValue("city", res.localidade);
    setValue("state", res.uf);
  };

  useEffect(() => {
    setValue("cel", normalizePhoneNumber(cellPhoneValue));
  }, [cellPhoneValue]);

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  useEffect(() => {
    setValue("cnpj", normalizeCnpjNumber(cnpjValue));
  }, [cnpjValue]);

  useEffect(() => {
    setValue("cep", normalizeCepNumber(cepValue));

    if (cepValue?.length === 9) {
      getAdressByCep(cepValue.replace("-", ""));
    }
  }, [cepValue]);

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <InputCustom
        type="text"
        label="Nome estabelecimento"
        color={"primary"}
        control={control}
        name={"name"}
        refs={register("name")}
        isRequired
      />

      <InputCustom
        type="email"
        label="Email"
        color={errors.email ? "danger" : "primary"}
        control={control}
        name={"email"}
        refs={register("email")}
        isRequired
      />

      <S.DualInput>
        <InputCustom
          type="text"
          label="CNPJ"
          color={"primary"}
          control={control}
          name={"cnpj"}
          refs={register("cnpj")}
          isRequired
        />

        <InputCustom
          type="text"
          label="CEP"
          color={"primary"}
          control={control}
          name={"cep"}
          refs={register("cep")}
          isRequired
        />
      </S.DualInput>

      <InputCustom
        type="text"
        label="Rua"
        control={control}
        name={"street"}
        refs={register("street")}
        isRequired
      />

      <S.DualInput>
        <InputCustom
          type="text"
          label="Bairro"
          color={"primary"}
          control={control}
          name={"neighborhood"}
          refs={register("neighborhood")}
          isRequired
        />

        <InputCustom
          type="text"
          label="Número"
          color={"primary"}
          control={control}
          name={"number"}
          refs={register("number")}
          isRequired
        />
      </S.DualInput>

      <S.DualInput>
        <InputCustom
          type="text"
          label="Estado"
          color={"primary"}
          control={control}
          name={"state"}
          refs={register("state")}
          isRequired
        />

        <InputCustom
          type="text"
          label="Cidade"
          color={"primary"}
          control={control}
          name={"city"}
          refs={register("city")}
          isRequired
        />
      </S.DualInput>

      <S.DualInput>
        <InputCustom
          type="tel"
          label="Celular"
          color={"primary"}
          control={control}
          name={"cel"}
          refs={register("cel")}
          isRequired
        />

        <InputCustom
          type="tel"
          label="Telefone"
          color={"primary"}
          control={control}
          name={"phone"}
          refs={register("phone")}
        />
      </S.DualInput>

      <S.DualInput>
        <InputCustom
          type={isVisible ? "text" : "password"}
          label="Senha"
          color="primary"
          control={control}
          name={"password"}
          refs={register("password")}
          isRequired
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeOff
                  className="text-default-400 pointer-events-none"
                  size={22}
                />
              ) : (
                <EyeIcon
                  className=" text-default-400 pointer-events-none"
                  size={22}
                />
              )}
            </button>
          }
        />
        <InputCustom
          type={isVisible ? "text" : "password"}
          label="Confirme sua senha"
          color="primary"
          control={control}
          name={"confirmPassword"}
          refs={register("confirmPassword")}
          isRequired
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeOff
                  className="text-default-400 pointer-events-none"
                  size={22}
                />
              ) : (
                <EyeIcon
                  className=" text-default-400 pointer-events-none"
                  size={22}
                />
              )}
            </button>
          }
        />
      </S.DualInput>
      <S.Button type="submit">Cadastrar</S.Button>
    </S.Form>
  );
}
