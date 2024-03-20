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

interface SignUpUser extends IUser {
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

export function RegisterUser({ type }: Props) {
  const {
    handleSubmit,
    watch,
    setValue,
    register,
    control,
    formState: { errors },
  } = useForm<SignUpUser>();

  const [isVisible, setIsVisible] = useState(false);

  const phoneValue = watch("phone");
  const cepValue = watch("cep");
  const cpfValue = watch("cpf");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<SignUpUser> = (data) => {};

  const getAdressByCep = async (cep: string) => {
    const res: DataCep = await getDataCep(cep);

    setValue("street", res.logradouro);
    setValue("neighborhood", res.bairro);
    setValue("city", res.localidade);
    setValue("state", res.uf);
  };

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  useEffect(() => {
    setValue("cpf", normalizeCpfNumber(cpfValue));
  }, [cpfValue]);


  useEffect(() => {
    setValue("cep", normalizeCepNumber(cepValue));

    if (cepValue?.length === 9) {
      getAdressByCep(cepValue.replace("-", ""));
    }
  }, [cepValue]);

  return (
      <S.ContainerInputs onSubmit={handleSubmit(onSubmit)}>
        <InputCustom
          type="text"
          label="Nome completo"
          color={"primary"}
          control={control}
          name={"name"}
          refs={register("name")}
          isRequired
        />

        <S.DualInput>
          <InputCustom
            type="date"
            label="Data de nascimento"
            color={"primary"}
            control={control}
            name={"name"}
            refs={register("name")}
            isRequired
          />

          <Select
            label="Gênero"
            variant="bordered"
            color="primary"
            classNames={{
              label: ["text-black/60", "font-[Poppins]"],
            }}
            size="sm"
            style={{ border: "2px solid #e4e4e7" }}
            onChange={(value) => setValue("gender", value.target.value)}
            isRequired
          >
            <SelectItem key="Homem" value="Homem">
              Homem
            </SelectItem>
            <SelectItem key="Mulher" value="Mulher">
              Mulher
            </SelectItem>
            <SelectItem key="Outro" value="Outro">
              Outro
            </SelectItem>
          </Select>
        </S.DualInput>

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
            label="CPF"
            color={"primary"}
            control={control}
            name={"cpf"}
            refs={register("cpf")}
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
            type="text"
            label="Estado"
            color={"primary"}
            control={control}
            name={"state"}
            refs={register("state")}
            isRequired
          />

          <InputCustom
            type="tel"
            label="Celular"
            color={"primary"}
            control={control}
            name={"phone"}
            refs={register("phone")}
            isRequired
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
      </S.ContainerInputs>
  );
}
