import * as S from "./styles";
import imageDog from "../../assets/images/viralata.jpeg";
import logo from "../../assets/icons/petHouseBlue.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@nextui-org/react";
import { EyeIcon, EyeOff, MailIcon } from "lucide-react";
import { useState } from "react";
import { InputCustom } from "../../components/input";
import { Register } from "./components/register";

type Login = {
  email: string;
  password: string;
};

export function Login() {
  const {
    handleSubmit,
    watch,
    setValue,
    register,
    control,
    formState: { errors },
  } = useForm<Login>();

  const [isVisible, setIsVisible] = useState(false);
  const [signUpVisible, setSignUpVisible] = useState(false);
  const [typeUser, setTypeUser] = useState("user");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<Login> = (data) => {};

  return (
    <S.Container>
      <S.ContainerImage>
        <S.Image src={imageDog} alt="" />
      </S.ContainerImage>

      {!signUpVisible ? (
        <S.ContainerLogin>
          <S.ContainerLogo>
            <S.Logo src={logo} alt="" />
            <S.LogoText>pet match</S.LogoText>
          </S.ContainerLogo>
          <S.Text>Seu novo melhor amigo está te esperando!</S.Text>

          <S.ContainerInputs onSubmit={handleSubmit(onSubmit)}>
            <InputCustom
              type="email"
              label="Email"
              color={errors.email ? "danger" : "primary"}
              control={control}
              name={"email"}
              refs={register("email")}
              isRequired
            />

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
            <S.Button type="submit">Entrar</S.Button>
            <S.TextSignUp>
              Ainda não possui uma conta? &nbsp;
              <S.ButtonSignUp onClick={() => {setTypeUser("user"),setSignUpVisible(true)}}>
                 Cadastre-se
              </S.ButtonSignUp>
            </S.TextSignUp>
            <S.TextSignUp>
              Se você possui uma ONG / abrigo de animais e deseja criar uma
              conta &nbsp;
              <S.ButtonSignUp
                onClick={() => {
                  setTypeUser("admin"), setSignUpVisible(true);
                }}
              >
                clique aqui
              </S.ButtonSignUp>
            </S.TextSignUp>
          </S.ContainerInputs>
        </S.ContainerLogin>
      ) : (
        <Register type={typeUser} setSignUpVisible={setSignUpVisible}/>
      )}
    </S.Container>
  );
}