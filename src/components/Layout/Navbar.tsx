import { IoIosHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";



export default function Navbar() {
  return (
    <div className="nav-container">
      <nav>
        <input placeholder="Entrez votre chaussure à rechercher" />
        <div className="button-container">
          <IoIosHeartEmpty />
          <IoCartOutline />
          <IoPeople />
        </div>
      </nav>
    </div>
  );
}
