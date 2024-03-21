import { SubmitHandler, useForm } from "react-hook-form";
import * as S from "../styles";
import { IUser } from "../../../../interfaces/IUser";
import { InputCustom } from "../../../../components/input";
import { EyeIcon, EyeOff } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Select, SelectSection, SelectItem } from "@nextui-org/react";
import { IOrganization } from "../../../../interfaces/IOrganization";
import {
  normalizeCepNumber,
  normalizeCnpjNumber,
  normalizeCpfNumber,
  normalizePhoneNumber,
} from "../../../../masks/mask";
import { getDataCep } from "../../../../services/viaCep";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster, toast } from "sonner";

interface SignUpAdmin extends IOrganization {
  password: string;
  confirmPassword: string;
}

type DataCep = {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

type Props = {
  setSignUpVisible: (value: boolean) => void;
};

export function RegisterAdmin({ setSignUpVisible }: Props) {
  const schema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required("Campo obrigatório"),
        email: yup
          .string()
          .email("Insira um formato de email válido")
          .required("Campo obrigatório"),
        cnpj: yup
          .string()
          .required("Campo obrigatório")
          .length(18, "CNPJ precisa ter 14 dígitos."),
        cep: yup
          .string()
          .required("Campo obrigatório")
          .length(9, "CEP precisa ter 8 dígitos"),
        street: yup.string().required("Campo obrigatório"),
        neighborhood: yup.string().required("Campo obrigatório"),
        number: yup.string().required("Campo obrigatório"),
        state: yup.string().required("Campo obrigatório"),
        city: yup.string().required("Campo obrigatório"),
        cel: yup
          .string()
          .required("Campo obrigatório")
          .length(15, "Verifique o número digitado"),
        phone: yup
          .string()
          .optional()
          .length(14, "Verifique o número digitado"),
        openingHours: yup.string().required("Campo obrigatório"),
        photo: yup.string().required("Selecione uma foto"),
        password: yup
          .string()
          .min(6, "A senha precisa ter no mínimo 6 caracteres")
          .required("Insira uma senha para continuar"),
        confirmPassword: yup
          .string()
          .required("Confirme a senha para continuar")
          .test({
            name: "confirmPassword",
            message: "As senhas não conferem!",
            test: function () {
              const { password, confirmPassword } = this.parent;
              if (password && confirmPassword !== password) {
                return false;
              }
              return true;
            },
          }),
      }),
    []
  );

  const {
    handleSubmit,
    watch,
    setValue,
    register,
    control,
    formState: { errors },
  } = useForm<SignUpAdmin>({ resolver: yupResolver(schema) });

  const [isVisible, setIsVisible] = useState(false);
  const [image, setImage] = useState("");

  const cellPhoneValue = watch("cel");
  const phoneValue = watch("phone");
  const cnpjValue = watch("cnpj");
  const cepValue = watch("cep");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<SignUpAdmin> = (data) => {
    console.log(data);

    toast.success("Cadastro realizado com sucesso!");

    setSignUpVisible(false);
  };

  const handleImageChange = (event: any) => {
    console.log(event)
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    setImage(URL.createObjectURL(file));

    setValue("photo", image);
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
        control={control}
        name={"email"}
        refs={register("email")}
        isRequired
        color={errors.email ? "danger" : "primary"}
        errorMessage={errors.email?.message}
        isInvalid={errors.email ? true : false}
      />

      <S.DualInput>
        <InputCustom
          type="text"
          label="CNPJ"
          control={control}
          name={"cnpj"}
          refs={register("cnpj")}
          isRequired
          color={errors.cnpj ? "danger" : "primary"}
          errorMessage={errors.cnpj?.message}
          isInvalid={errors.cnpj ? true : false}
        />

        <InputCustom
          type="text"
          label="CEP"
          control={control}
          name={"cep"}
          refs={register("cep")}
          isRequired
          color={errors.cep ? "danger" : "primary"}
          errorMessage={errors.cep?.message}
          isInvalid={errors.cep ? true : false}
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
          control={control}
          name={"cel"}
          refs={register("cel")}
          isRequired
          color={errors.cel ? "danger" : "primary"}
          errorMessage={errors.cel?.message}
          isInvalid={errors.cel ? true : false}
        />

        <InputCustom
          type="tel"
          label="Telefone"
          control={control}
          name={"phone"}
          refs={register("phone")}
          color={errors.phone ? "danger" : "primary"}
          errorMessage={errors.phone?.message}
          isInvalid={errors.phone ? true : false}
        />
      </S.DualInput>
      <InputCustom
        type="text"
        label="Horário de funcionamento"
        control={control}
        name={"openingHours"}
        refs={register("openingHours")}
        color={"primary"}
        isRequired
        placeholder="Ex: Segunda à sexta: 08h ás 17h, Sábados: 09h ás 13h"
      />

      <S.DualInput>
        <InputCustom
          type={isVisible ? "text" : "password"}
          label="Senha"
          control={control}
          name={"password"}
          refs={register("password")}
          isRequired
          color={errors.password ? "danger" : "primary"}
          errorMessage={errors.password?.message}
          isInvalid={errors.password ? true : false}
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
          control={control}
          name={"confirmPassword"}
          refs={register("confirmPassword")}
          isRequired
          color={errors.confirmPassword ? "danger" : "primary"}
          errorMessage={errors.confirmPassword?.message}
          isInvalid={errors.confirmPassword ? true : false}
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
      <S.InputFile>
        <span>Selecione uma foto para seu estabelecimento <span style={{color: "red"}}>*</span></span>
      <input
        type="file"
        onChange={handleImageChange}
        required
      />
      </S.InputFile>
      
      <S.Button type="submit">Cadastrar</S.Button>
      <Toaster position="top-right" richColors />
    </S.Form>
  );
}
