import { useState } from "react";
import * as S from "./styles";
import dogIcon from "../../../../../assets/icons/dog.svg";
import catIcon from "../../../../../assets/icons/cat.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPet } from "../../../../../interfaces/IPet";
import { IOrganization } from "../../../../../interfaces/IOrganization";
import { Input, Radio, RadioGroup, Spinner } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/react";
import addPhoto from "../../../../../assets/images/adicionar-foto.png";
import { CustomButton } from "../../../../../components/customButton";
import { createPet } from "../../../../../services/pet.service";
import { v4 as uuidv4 } from "uuid";
import { Toaster, toast } from "sonner";

type Props ={
  user: IOrganization | undefined;
}

export function RegisterPet({user} : Props) {
  const { handleSubmit, watch, setValue, reset, register } = useForm<IPet>();

  const personalities = [
    "Ágil",
    "Alegre",
    "Amigável",
    "Bravo(a)",
    "Brincalhão",
    "Calmo(a)",
    "Carinhoso(a)",
    "Companheiro(a)",
    "Curioso(a)",
    "Dócil",
    "Enérgico(a)",
    "Fofo(a)",
    "Independente",
    "Inteligente",
    "Medroso(a)",
    "Meigo(a)",
    "Obediente",
    "Quieto(a)",
    "Sapeca",
    "Sociável",
  ];

  const [personality, setPersonality] = useState<string[]>([]);
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);


  function handleSelect(value: string) {
    const newArray = value.split(",");

    setPersonality(newArray);
  }

  const handleImageChange = (event: any) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const onSubmit: SubmitHandler<IPet> = async (data) => {
    setLoading(true);
    const dataForm = {
      type: data.type,
      name: data.name,
      age: data.age,
      gender: data.gender,
      size: data.size,
      photo: image,
      isAdopt: false,
      personality: personality,
      organization: user as IOrganization,
      uid: uuidv4(),
    };

    const res = await createPet(dataForm);

    if (res) {
      toast.success("Pet cadastrado com sucesso!");
    } else {
      toast.error("Ocorreu um erro ao cadastrar. Tente novamente mais tarde.");
    }

    setLoading(false);
    reset();
    setImage("");
  };

  return (
    <S.Container>
      <S.ContainerRegister>
        <S.H3>Cadastre seu pet</S.H3>
        <S.ContentRegister>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.ContainerForm>
              <S.ContainerIcons>
                <S.ContentIcon
                  onClick={() => setValue("type", "dog")}
                  style={
                    watch("type") === "dog"
                      ? { border: "1px solid #ECB159" }
                      : { border: "none" }
                  }
                >
                  <S.Icon src={dogIcon} alt="" />
                  <S.IconText>Cão</S.IconText>
                </S.ContentIcon>

                <S.ContentIcon
                  onClick={() => setValue("type", "cat")}
                  style={
                    watch("type") === "cat"
                      ? { border: "1px solid #ECB159" }
                      : { border: "none" }
                  }
                >
                  <S.Icon src={catIcon} alt="" />
                  <S.IconText>Gato</S.IconText>
                </S.ContentIcon>
              </S.ContainerIcons>
              <S.DualInput>
                <Input
                  label="Nome"
                  onValueChange={(value: string) => setValue("name", value)}
                  isRequired
                  type="text"
                  size="sm"
                  variant="bordered"
                  color="primary"
                  classNames={{ label: "text-slate-600" }}
                  defaultValue=""
                  {...register("name")}
                />
                <Select
                  label="Personalidade"
                  placeholder="Selecione até 3 atributos"
                  selectionMode="multiple"
                  variant="bordered"
                  size="sm"
                  classNames={{
                    label: ["font-[Poppins]"],
                  }}
                  style={{ border: "2px solid #e4e4e7" }}
                  isRequired
                  onChange={(e) => {
                    handleSelect(e.target.value);
                  }}
                  isInvalid={personality.length > 3}
                  errorMessage={
                    personality.length > 3 && "Selecione apenas 3 atributos"
                  }
                  
                >
                  {personalities.map((item) => (
                    <SelectItem
                      className="text-default-500 text-[0.5rem]"
                      key={item}
                      value={item}
                    >
                      {item}
                    </SelectItem>
                  ))}
                </Select>
              </S.DualInput>

              <S.DualInput>
                <RadioGroup
                  label="Gênero:"
                  size="sm"
                  color="warning"
                  style={{ fontSize: "0.9rem" }}
                  onValueChange={(value) => setValue("gender", value)}
                  isRequired
                  defaultValue=""
                  {...register("gender")}
                >
                  <S.ContainerRadio>
                    <Radio value="Macho">Macho</Radio>
                    <Radio value="Fêmea">Fêmea</Radio>
                  </S.ContainerRadio>
                </RadioGroup>

                <RadioGroup
                  label="Porte:"
                  size="sm"
                  color="warning"
                  style={{ fontSize: "0.9rem" }}
                  onValueChange={(value) => setValue("size", value)}
                  isRequired
                  defaultValue=""
                  {...register("size")}
                >
                  <S.ContainerRadio>
                    <Radio value="Pequeno">Pequeno</Radio>
                    <Radio value="Médio">Médio</Radio>
                    <Radio value="Grande">Grande</Radio>
                  </S.ContainerRadio>
                </RadioGroup>
              </S.DualInput>

              <RadioGroup
                label="Idade:"
                size="sm"
                color="warning"
                style={{ fontSize: "0.9rem" }}
                onValueChange={(value) => setValue("age", value)}
                isRequired
                defaultValue=""
                {...register("age")}
              >
                <S.ContainerRadio>
                  <Radio value="Filhote">Filhote</Radio>
                  <Radio value="Jovem">Jovem</Radio>
                  <Radio value="Adulto">Adulto</Radio>
                  <Radio value="Idoso">Idoso</Radio>
                </S.ContainerRadio>
              </RadioGroup>

              <S.InputFile>
                <label>
                  {image ? (
                    <S.Image src={image} />
                  ) : (
                    <S.ContainerImage>
                      <S.DefaultImage src={addPhoto} />
                    </S.ContainerImage>
                  )}
                  <input
                    type="file"
                    onChange={handleImageChange}
                    required
                    style={{ display: "none" }}
                  />
                </label>
              </S.InputFile>
            </S.ContainerForm>

            {!loading ? (
              <CustomButton
                type="submit"
                backgroundColor={"#B67352"}
                hoverBackgroundColor={"#c27a56"}
              >
                Cadastrar
              </CustomButton>
            ) : (
              <CustomButton
                type="submit"
                backgroundColor={"#B67352"}
                hoverBackgroundColor={"#c27a56"}
                disabled={true}
              >
                <Spinner color="default" size="sm" />
              </CustomButton>
            )}
          </S.Form>
        </S.ContentRegister>
        <Toaster position="top-right" richColors />
      </S.ContainerRegister>
    </S.Container>
  );
}
