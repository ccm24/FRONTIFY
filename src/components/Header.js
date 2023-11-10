import completeLogo from "../assets/img/Isologo.svg";
import isotipo from "../assets/img/Isotipo.svg"
import "./Header.css";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

function Header({onSearchTextChange}) {
  return (
    <div className="headerSecondPage">
      <SearchBar onSearchTextChange={onSearchTextChange} />
      <Link to="/albums"> <img className="logoAlbumPage" src={completeLogo} /></Link>
      <Link to="/albums"> <img className="isotipo" src={isotipo} /></Link>

    </div>
  );
}

export default Header;
