import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function About() {

  const [projects, setProjects] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 75;
    const interval = setInterval(() => {
      start += 1;
      setProjects(start);
      if (start === end) clearInterval(interval);
    }, 20);
  }, []);

  return (
    <section id="about" className="py-5 bg-light position-relative overflow-hidden">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center fw-bold mb-5">
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
            <p className="lead">
              We build scalable, high-performance digital solutions
              focused on clean architecture and premium user experience.
            </p>

            <div className="row text-center mt-4">
              <div className="col-4">
                <h3 className="fw-bold">{projects}+</h3>
                <p>Projects</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold">6+</h3>
                <p>Years</p>
              </div>
              <div className="col-4">
                <h3 className="fw-bold">98%</h3>
                <p>Retention</p>
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

            {["React", "Bootstrap", "UI/UX", "Performance"].map((skill, i) => (
              <div key={i} className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>{skill}</span>
                  <span>{85 + i * 3}%</span>
                </div>
                <div className="progress">
                  <motion.div
                    className="progress-bar bg-dark"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${85 + i * 3}%` }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            ))}

          </motion.div>
        </div>

        {/* CORE VALUES SECTION */}
        <motion.div
          className="row mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {["Innovation", "Quality", "Integrity"].map((value, i) => (
            <div className="col-md-4 mb-3" key={i}>
              <div className="p-4 bg-white shadow-sm rounded-4 text-center">
                <h5 className="fw-bold">{value}</h5>
                <p>
                  We focus on delivering reliable and modern digital solutions.
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default About;
