import { Outlet, Link } from "react-router-dom";
import "./full-layout.styles.scss";

const FullLayout = ({ children }) => {
  return (
    <div className="full-layout-container">
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
      <Outlet />
      <div>Footer</div>
    </div>
  );
};

export default FullLayout;
