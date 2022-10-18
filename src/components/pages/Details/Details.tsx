import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";
import { convertToPath } from "../../../utility/utils";
import Carrusel from "./Carrusel/Carrusel";
import ProductDetails from "./ProductDetails/ProductDetails";
import RecommendedProducts from "./RecommendedProducts/RecommendedProducts";

const Details = () => {
  const { products, loading } = useContext(ProductContext);

  const { id } = useParams();

  const product = products.find(
    (product) => convertToPath(product.title) === convertToPath(id as string)
  );


  return (
    <Layout backIcon={true}>
      <>
        {loading && <h2>Cargando...</h2>}
        {!loading && product && (
          <>
            <Carrusel product={product} />
            <ProductDetails product={product} />
            <RecommendedProducts products={products} />
          </>
        )}
      </>
    </Layout>
  );
};

export default Details;
