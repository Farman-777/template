import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow transition ${
        scrolled ? "bg-dark py-2" : "bg-transparent py-3"
      }`}
    >
      <div className="container">
        <span className="navbar-brand fw-bold fs-4 text-white">
          Project
        </span>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center gap-3">
            {["about", "services", "contact"].map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="active-link"
                  className="nav-link text-white position-relative custom-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}

            {/* CTA Button */}
            <li className="nav-item">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="btn btn-primary rounded-pill px-4"
              >
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
