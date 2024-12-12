import {} from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link className="header-logo-link">
        SOFTSKILLS <span>Data Management</span>
      </Link>

      <nav className="header-nav">
        <ul>
          <li>
            <Link className="link">Our Mission</Link>
          </li>
          <li>
            <Link className="link">Our Vision</Link>
          </li>
          <li>
            <Link className="link">Our Values</Link>
          </li>
          <li>
            <Link className="link">Our Expertise</Link>
          </li>
          <li>
            <Link className="link">About Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
