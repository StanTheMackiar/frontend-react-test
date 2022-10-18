import { useState } from "react";
import { Link } from "react-router-dom";
import { PropsOneProduct } from "../../../../interfaces/interfaces";

//Estilos
import "../../../../styles/components/ProductDetails.scss";

const ProductDetails = ({ product }: PropsOneProduct) => {
  const {
    description,
    estate,
    extras,
    features,
    images,
    price,
    subtitle,
    title,
  } = product;

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(prev => !prev) 
  }

  return (
    <article className="detail">
      <section className="title-description-section">
        <h1>{title}</h1>
        <p>{subtitle}</p>

        <p>{description}</p>
      </section>

      <section className="figures-price-likebutton-section">
        <div>
          <figure>
            <img
              src="./img/Area.svg"
              alt="Logo del area"
              title="Área"
            />
            <figcaption>{estate.area}m^</figcaption>
          </figure>

          <figure>
            <img
              src="./img/Bed.svg"
              alt="Logo de una cama"
              title="Habitaciones"
            />
            <figcaption>{estate.bedrooms}</figcaption>
          </figure>

          <figure>
            <img
              src="./img/Bath.svg"
              alt="Logo de un baño"
              title="Baños"
            />
            <figcaption>{estate.bathrooms}</figcaption>
          </figure>
        </div>

        <div>
          <p>{price}€</p>
          <img
            onClick={handleLike}
            src={`./img/${!isLiked ? "HearthOutlined" : "HearthContained"}.svg`}
            alt="Logo de un corazon"
            title="Agregar a favoritos"
          />
        </div>
      </section>

      <section className="features-section">
        <div>
          <h4>Caracteristicas</h4>
          <ul>
            {features.map(feature => 
              <li key={feature}>{feature}</li>
            )}
          </ul>
        </div>

        <div>
          <h4>Extras</h4>
          <ul>
            {extras.map(extra => 
              <li key={extra}>{extra}</li>
            )}
          </ul>
        </div>
      </section>

      <img
        className="image-map-section"
        src={images.map?.src}
        alt={images.map?.alt}
      />

      <section className="contact-section">
        <div>
          <p>Avísame si baja</p>
          <img
            width="80"
            src="./img/Switch.svg"
            alt="Switch Logotipo"
          />
        </div>
        <button><a href="mailto: correo@example.com">Contactar</a></button>
      </section>
    </article>
  );
};

export default ProductDetails;
