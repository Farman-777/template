import { Link } from "react-scroll";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <div className="container">
        <span className="navbar-brand">Project</span>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link 
              to="about" 
              smooth={true} 
              duration={500}
              className="nav-link"
              activeClass="active"
              spy={true}
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="services" 
              smooth={true} 
              duration={500}
              className="nav-link"
              activeClass="active"
              spy={true}
            >
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link 
              to="contact" 
              smooth={true} 
              duration={500}
              className="nav-link"
              activeClass="active"
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
