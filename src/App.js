import "./App.css";
import FrontPage from "./components/FrontPage";
import AlbumCatalog from "./components/AlbumCatalog";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="App">
      <div className="search-bar-container"></div>

      <Routes>
        <Route index element={<FrontPage />} />
        <Route path="albums" element={<AlbumCatalog />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
