// Context
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

// Componentes
import Card from "../../Card/Card";
import Layout from "../../Layout/Layout";

//Estilos
import '../../../styles/components/Home.scss'

const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <Layout>
      <section className="grid">
        {products.length &&
          products.map((product) => <Card product={product} />)}
      </section>
    </Layout>
  );
};

export default Home;
