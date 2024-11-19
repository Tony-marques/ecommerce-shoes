import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline, IoPeople } from "react-icons/io5";
import styled from "styled-components";

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
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #f1f5f9;
  padding: 1rem;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;

    input {
      display: flex;
      background-color: #f1f5f9;
      padding: 0.75rem 1rem;
      width: 250px;
      outline: none;
      border: none;
      border-radius: 5px;
      color: #1e293b;
      /* font-weight: 300; */
      font-family: "montserrat";
    }

    .button-container {
      display: flex;
      gap: 1rem;

      svg {
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
  }
`;
