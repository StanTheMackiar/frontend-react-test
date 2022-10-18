
import { HashRouter, Route, Routes } from "react-router-dom";
import Details from "../components/Pages/Details/Details";
import Error404 from "../components/Pages/Error404/Error404";
import Home from "../components/Pages/Home/Home";

// Componentes / Paginas

const Paths = () => {
  return (
    <HashRouter>
      <Routes>
      <Route
          path="*"
          element={<Error404/>}
        />
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/details/:id"
          element={<Details/>}
        />
      </Routes>
    </HashRouter>
  )
}

export default Paths