import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  return (
    <Layout backIcon={true}>
      <div>Details</div>
      <p>Query: {id}</p>
    </Layout>
  );
};

export default Details;
