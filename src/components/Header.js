import completeLogo from "../assets/img/Isologo.svg";
import "./Header.css";
import { SearchBar } from "./SearchBar";

function Header({onSearchTextChange}) {
  return (
    
    <div>
      <SearchBar onSearchTextChange={onSearchTextChange} />
      <img className="logoAlbumPage" src={completeLogo} />
    </div>
  );
}

export default Header;
