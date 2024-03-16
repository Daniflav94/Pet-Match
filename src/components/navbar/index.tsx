import logo from "../../assets/icons/pet-house.png";
import heart from "../../assets/icons/coracao.png";
import bell from "../../assets/icons/sino.png";
import * as S from "./styles";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <S.Nav>
      <S.Ul>
        <div>
          <S.Logo>
            <S.Img src={logo} alt="logo pet match" />
            <S.LogoText>pet match</S.LogoText>
          </S.Logo>
        </div>
        <S.Div>
          <li>
            <Link to="/">
              <S.Span>Início</S.Span>
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <S.Span>Sobre</S.Span>
            </Link>
          </li>
          <li>
            <Link to="/adotar">
              <S.Span>Adotar</S.Span>
            </Link>
          </li>
          <S.Container>
            <li>
              <Link to="/favoritos">
                <S.Container>
                  <S.Icon src={heart} alt="" />
                </S.Container>
              </Link>
            </li>
            <li>
              <Link to="/notificacoes">
                <S.Container>
                  <S.Icon src={bell} alt="" />
                </S.Container>
              </Link>
            </li>
            <li>
              <Link to="/">
                <S.Span>Entrar</S.Span>
              </Link>
            </li>
          </S.Container>
        </S.Div>
      </S.Ul>
    </S.Nav>
  );
}
