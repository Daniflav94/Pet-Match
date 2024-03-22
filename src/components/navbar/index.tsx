import logo from "../../assets/icons/pet-house.png";
import heart from "../../assets/icons/coracao.png";
import bell from "../../assets/icons/sino.png";
import * as S from "./styles";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const route = useLocation();
  
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
              <S.Span style={route.pathname === '/' ? {borderBottom: '2px solid #ECB159'} : {}}>Início</S.Span>
            </Link>
          </li>
          <li>
            <Link to="/sobre">
              <S.Span style={route.pathname === '/sobre' ? {borderBottom: '2px solid #ECB159'} : {}}>Sobre</S.Span>
            </Link>
          </li>
          <li>
            <Link to="/adotar">
              <S.Span style={route.pathname === '/adotar' ? {borderBottom: '2px solid #ECB159'} : {}}>Adotar</S.Span>
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
              <Link to="/login">
                <S.Login>Entrar</S.Login>
              </Link>
            </li>
          </S.Container>
        </S.Div>
      </S.Ul>
    </S.Nav>
  );
}
