// Interface
import { useState } from "react";
import { PropsOneProduct } from "../../../../interfaces/interfaces";

//Estilos
import "../../../../styles/components/Carrusel.scss";

const Carrusel = ({ product }: PropsOneProduct) => {
  const { images } = product;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images.details[0]);
  const [loaded, setLoaded] = useState(true);

  console.log(selectedIndex);
  console.log(loaded);

  const changeImage = (images: string[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 300);
  };

  const selectImage = (el: string, i: number) => {
    setLoaded(false);
    setTimeout(() => {
      setLoaded(true);
      setSelectedImage(el);
      setSelectedIndex(i);
    }, 300);
  };

  const previous = () => {
    changeImage(images.details, false);
  };

  const next = () => {
    changeImage(images.details);
  };

  return (
    <section className="carrusel-container">
      <div className="carrusel-images-section">
        <img
          src={selectedImage}
          alt={`Imagenes del inmueble`}
          className={loaded ? "loaded" : ""}
        />

        <div className="carrusel-arrows">
          <span
            onClick={previous}
            className="arrow-left"></span>
          <span
            onClick={next}
            className="arrow-right"></span>
        </div>
        <div className="points-container">
          {images.details &&
            images.details.map((el, i) => (
              <span
                className={i === selectedIndex ? "active" : ""}
                key={i}
                onClick={() => selectImage(el, i)}></span>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Carrusel;
