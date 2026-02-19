import { motion } from "framer-motion";
import "../assests/css/Custom.css";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="hero" className="hero-section d-flex align-items-center">
      <div className="container text-center hero-content">

        <h1 className="display-3 fw-bold">
          We Build{" "}
          <span className="hero-highlight">
            <Typewriter
              words={["Modern Websites", "Scalable Apps", "High Performance Systems"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lead mt-3"
        >
          Professional React & Bootstrap Single Page Application
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4"
        >
          <a href="#contact" className="btn btn-light px-4 me-3 hero-btn-primary">
            Get Started
          </a>

          <a href="#services" className="btn btn-outline-light px-4 hero-btn-secondary">
            View Services
          </a>
        </motion.div>

      </div>

      {/* Floating Shapes */}
      <div className="hero-shape shape-1"></div>
      <div className="hero-shape shape-2"></div>
    </section>
  );
}

export default Hero;
