import logo from "../../assets/icons/pet-house.png";
import heart from "../../assets/icons/coracao.png";
import bell from "../../assets/icons/sino.png";
import logoutIcon from "../../assets/icons/logout.png";
import * as S from "./styles";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { IUser } from "../../interfaces/IUser";
import { IOrganization } from "../../interfaces/IOrganization";
import {
  Tooltip,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { logout } from "../../services/auth.service";
import { ChevronDown, UserRoundCog } from "lucide-react";

export function Navbar() {
  const route = useLocation();
  const navigate = useNavigate();

  const [userLogged, setUserLogged] = useState<IUser | IOrganization>();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      setUserLogged(JSON.parse(user));
    }
  }, []);

  return (
    <S.Nav>
      <S.Ul>
        <Link to="/">
          <S.Logo>
            <S.Img src={logo} alt="logo pet match" />
            <S.LogoText>pet match</S.LogoText>
          </S.Logo>
        </Link>
        <S.Div>
          <li>
            <Link to="/">
              <S.Span
                style={
                  route.pathname === "/"
                    ? { borderBottom: "2px solid #ECB159" }
                    : {}
                }
              >
                Início
              </S.Span>
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <S.Span
                style={
                  route.pathname === "/sobre"
                    ? { borderBottom: "2px solid #ECB159" }
                    : {}
                }
              >
                Sobre
              </S.Span>
            </Link>
          </li>
          {userLogged?.type == "user" || userLogged?.type == "" ? (
            <li>
              <Link to="/adotar">
                <S.Span
                  style={
                    route.pathname === "/adotar"
                      ? { borderBottom: "2px solid #ECB159" }
                      : {}
                  }
                >
                  Adotar
                </S.Span>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/meus-pets">
                <S.Span
                  style={
                    route.pathname === "/meus-pets"
                      ? { borderBottom: "2px solid #ECB159" }
                      : {}
                  }
                >
                  Meus Pets
                </S.Span>
              </Link>
            </li>
          )}

          <S.Container>
            {userLogged?.type == "user" ||
              (userLogged?.type == "" && (
                <li>
                  <Link to="/favoritos">
                    <S.Container>
                      <S.Icon src={heart} alt="" />
                    </S.Container>
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/notificacoes">
                <S.Container>
                  <S.Icon src={bell} alt="" />
                </S.Container>
              </Link>
            </li>
            <li>
              {userLogged ? (
                <Dropdown>
                  <DropdownTrigger>
                    <S.Container>
                      <S.Login>
                        Olá, {userLogged.name.split(" ")[0]}
                        <ChevronDown size={16} />
                      </S.Login>

                      <Tooltip
                        content="Sair"
                        placement="bottom-start"
                        size="sm"
                      >
                        <button
                          onClick={() => {
                            logout(), setUserLogged(undefined);
                          }}
                        >
                          <S.Icon src={logoutIcon} />
                        </button>
                      </Tooltip>
                    </S.Container>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Static Actions"
                    color="primary"
                    variant="solid"
                    
                  >
                    <DropdownItem
                      key="/perfil"
                      startContent={<UserRoundCog size={16} />}
                      onPress={() => navigate("/perfil")}
                    >
                      Meus dados
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              ) : (
                <Link to="/login">
                  <S.Login>Entrar</S.Login>
                </Link>
              )}
            </li>
          </S.Container>
        </S.Div>
      </S.Ul>
    </S.Nav>
  );
}
