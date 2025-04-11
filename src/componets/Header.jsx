// Header.jsx
import { LOGO } from "../utils/constant";

const Header = () => {
    return (
      <div className="header">
        <div className="Logo">
          <img
            className="logos"
            src={LOGO}
            alt=""
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  export  default Header;

