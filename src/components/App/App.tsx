import ProductProvider from "../../context/ProductContext";
import Paths from "../../routes/Paths";


// Estilos globales
import "../../styles/global/styles.scss";



function App() {
  return (
    <ProductProvider>
      <Paths />
    </ProductProvider>
  );
}

export default App;
