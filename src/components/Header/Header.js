import "./Header.scss";
import { Link } from "react-router-dom";
import person from "../../assets/icons/person.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <Link to="/">
          <h1 className="header__title-text">ÀLaMode</h1>
        </Link>
        {/* <img className="header__icon" src={person} /> */}
      </div>
    </header>
  );
};

export default Header;
