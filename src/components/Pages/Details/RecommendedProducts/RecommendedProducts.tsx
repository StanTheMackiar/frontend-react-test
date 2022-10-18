// Interfaz
import { PropsAllProducts } from "../../../../interfaces/interfaces"

// Componentes
import Card from "../../../Card/Card";

//Estilos
import '../../../../styles/components/RecommendedProducts.scss'


const RecommendedProducts = ({products}: PropsAllProducts) => {

  const firtsParamToSlice = Math.floor(Math.random() * (products.length - 2));
  const productsToDisplay = products.slice(firtsParamToSlice, firtsParamToSlice + 2)

  return (
    <article className="recommended-items-section">
    <h2>También puede interesarte</h2>
    <div className="recommended-grid">
      {
        productsToDisplay.length && productsToDisplay.map(product => <Card key={product.id} product={product}/>)
      }
    </div>
  </article>
  )
}

export default RecommendedProducts