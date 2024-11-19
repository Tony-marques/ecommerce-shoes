import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoPeople } from "react-icons/io5";

export default function Navbar() {
  return (
    <NavbarStyled>
      <nav>
        <input placeholder="Entrez votre chaussure à rechercher" />
        <div className="button-container">
          <IoIosHeartEmpty />
          <IoCartOutline />
          <IoPeople />
        </div>
      </nav>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  

`