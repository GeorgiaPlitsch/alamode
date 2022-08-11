import "./Header.scss";
import person from "../../assets/icons/person.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__title">
        <h1 className="header__title-text">ÀLaMode</h1>
        {/* <img className="header__icon" src={person} /> */}
      </div>
    </header>
  );
};

export default Header;
