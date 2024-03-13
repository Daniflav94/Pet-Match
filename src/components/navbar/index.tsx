import logo from "../../assets/icons/pet-house.png";
import dogProfile from "../../assets/icons/dogProfile.png";

import {
  Nav,
  Span,
  Img,
  LogoText,
  Logo,
  Div,
  Ul,
} from "./styles";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header>
      <Nav>
        <Ul>
          <div>
            <Logo>
              <Img src={logo} alt="logo pet match" />
              <LogoText>pet match</LogoText>
            </Logo>
          </div>
          <Div>
            <li>
              <Link to="/"><Span>Início</Span></Link>
            </li>
            <li>
              <Link to="/sobre"><Span>Sobre</Span></Link>
            </li>
            <li>
              <Link to="/adotar"><Span>Adotar</Span></Link>
            </li>
            <li>
              <button>
                <Img src="" />
              </button>
            </li>
            
          </Div>
        </Ul>
      </Nav>
    </header>
  );
}
