import { Link } from "react-router-dom";
import "./navigation-bar.styles.scss";

const NavigationBar = () => {
  return (
    <div className="navigation-bar-container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/member-list">Member list</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
