import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function About() {

  const [projects, setProjects] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = 75;
    const duration = 1500;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setProjects(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [isInView]);

  const skills = [
    { name: "React", value: 88 },
    { name: "Bootstrap", value: 90 },
    { name: "UI/UX", value: 85 },
    { name: "Performance", value: 92 }
  ];

  return (
    <section id="about" className="py-5 position-relative overflow-hidden about-bg">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center fw-bold mb-5 display-6">
            About Our Company
          </h2>
        </motion.div>

        <div className="row align-items-center">

          {/* LEFT SIDE */}
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="lead text-muted">
              We build scalable, high-performance digital solutions
              focused on clean architecture and premium user experience.
            </p>

            <div ref={counterRef} className="row text-center mt-4">
              <div className="col-4">
                <h3 className="fw-bold">{projects}+</h3>
                <p className="small text-muted">Projects</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold">6+</h3>
                <p className="small text-muted">Years</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold">98%</h3>
                <p className="small text-muted">Retention</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE SKILLS */}
          <motion.div
            className="col-md-6 mt-4 mt-md-0"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {skills.map((skill, i) => (
              <div key={i} className="mb-4">
                <div className="d-flex justify-content-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>

                <div className="progress custom-progress">
                  <motion.div
                    className="progress-bar gradient-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* CORE VALUES */}
        <motion.div
          className="row mt-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {["Innovation", "Quality", "Integrity"].map((value, i) => (
            <div className="col-md-4 mb-4" key={i}>
              <motion.div
                whileHover={{ y: -8 }}
                className="p-4 glass-card text-center"
              >
                <h5 className="fw-bold">{value}</h5>
                <p className="text-muted small">
                  We focus on delivering reliable and modern digital solutions.
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;
