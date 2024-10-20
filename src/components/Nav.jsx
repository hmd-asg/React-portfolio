import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/helpers';

function Nav({ currentPage }) {
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      {/* Hamburger menu button */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ color: "black", borderColor: "black" }}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible nav links */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li
            className={`nav-item mx-2 ${currentPage === '/' && 'navActive'}`}
            key="about"
          >
            <Link to="/">About</Link>
          </li>
          {pages.map((Page) => (
            <li
              className={`nav-item mx-2 ${currentPage === `/${Page}` && 'navActive'}`}
              key={Page}
            >
              <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
