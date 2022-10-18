import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import "../../styles/global/styles.scss";
import { HashRouter, Route, Routes } from "react-router-dom";
import ProductProvider from "../../context/ProductContext";

function App() {
  return (
    <ProductProvider>
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/store/:id"
          element={<Details/>}
        />
      </Routes>
    </HashRouter>
    </ProductProvider>
  );
}

export default App;
