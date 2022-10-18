import { Products } from '../../interfaces/interfaces'
import { convertToPath } from '../../utility/utils';
import '../../styles/components/Card.scss'
import { Link } from 'react-router-dom';

interface CardProps {
    product: Products,
}

const Card = ({product}: CardProps) => {

    const {estate, images, price, subtitle, title} = product;

  return (
    <article className="item">
            <img
              src={images.miniature?.src}
              alt={images.miniature?.alt}
              />
            <h2>{title}</h2>
            <p>{subtitle}</p>

            <section>
              <div>
                <figure>
                  <img
                    src="./img/WEB_MATERIAL-11.svg"
                    title="Área" 
                    alt="Logotipo de area"/>
                  <figcaption>{estate.area}m^</figcaption>
                </figure>

                <figure>
                  <img
                    src="./img/WEB_MATERIAL-10.svg"
                    title="Habitaciones"
                    alt="Logotipo de una cama" />
                  <figcaption>{estate.bedrooms}</figcaption>
                </figure>

                <figure>
                  <img
                    src="./img/WEB_MATERIAL-09.svg"
                    title="Baños" 
                    alt="Logotipo de un retrete"/>
                  <figcaption>{estate.bathrooms}</figcaption>
                </figure>
              </div>

              <p className="price"><strong>{price}€</strong></p>

              <button><Link to={`/details/${convertToPath(title)}`}>Más info</Link></button>
            </section>
          </article>
  )
}

export default Card