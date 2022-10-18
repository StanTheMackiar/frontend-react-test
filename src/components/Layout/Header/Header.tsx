import { Link } from "react-router-dom";
import "../../../styles/components/Header.scss";

interface Props {
  backIcon?: boolean;
}

const Header = ({ backIcon = false }: Props) => {
  return (
    <header>
      <Link to="/">
        <img
          alt="Logo de Grocasa"
          src="/img/Grocasa.png"
          width="150"
        />
      </Link>
      {backIcon && (
        <Link to="/">
          <img
            className="back-icon"
            src="./img/ICON_ARROW-05.svg"
            alt="Logo volver hacia atras"
            title="Volver"
            width="30"
          />
        </Link>
      )}
    </header>
  );
};

export default Header;
