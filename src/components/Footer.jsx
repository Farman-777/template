import { Link } from "react-scroll";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3 shadow-lg">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Project Name</h5>
            <p className="small text-secondary">
              We provide high quality digital solutions and promotional
              services. Our mission is to grow businesses with creativity
              and strategy.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-secondary text-decoration-none footer-link"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-secondary text-decoration-none footer-link"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={500}
                  className="text-secondary text-decoration-none footer-link"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-secondary text-decoration-none footer-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Our Services</h6>
            <ul className="list-unstyled text-secondary">
              <li>Website Development</li>
              <li>Instagram Promotion</li>
              <li>Business Branding</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Contact</h6>
            <p className="small text-secondary mb-1">
              Wazirabad Jagatpur, Delhi
            </p>
            <p className="small text-secondary mb-1">
              +91 8076723073
            </p>
            <p className="small text-secondary">
              info@yourproject.com
            </p>
          </div>

        </div>

        <hr className="border-secondary" />

        <div className="text-center small text-secondary">
          © {year} Project Name. All Rights Reserved.
        </div>
      </div>

      {/* Extra CSS */}
      <style jsx>{`
        .footer-link:hover {
          color: white !important;
          cursor: pointer;
          transition: 0.3s;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
