import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";

const servicesData = [
  {
    title: "Web Development",
    desc: "Modern, scalable and high-performance web applications.",
    features: ["React Apps", "Responsive Design", "Clean Architecture"],
    icon: <FaCode size={30} />
  },
  {
    title: "UI/UX Design",
    desc: "User-focused and conversion-driven design systems.",
    features: ["Wireframing", "Design Systems", "Prototyping"],
    icon: <FaPalette size={30} />
  },
  {
    title: "Performance & SEO",
    desc: "Speed optimized and search engine friendly solutions.",
    features: ["Core Web Vitals", "Technical SEO", "Optimization"],
    icon: <FaRocket size={30} />
  }
];

function Services() {
  return (
    <section id="services" className="py-5 position-relative">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold">Our Services</h2>
          <p className="text-muted">
            We provide premium digital solutions for modern businesses.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="row">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="col-md-4 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-card p-4 h-100 text-center">

                {/* Icon */}
                <div className="icon-circle mb-3 d-flex align-items-center justify-content-center mx-auto">
                  {service.icon}
                </div>

                <h5 className="fw-bold">{service.title}</h5>
                <p className="text-muted">{service.desc}</p>

                <ul className="list-unstyled mt-3 text-start">
                  {service.features.map((item, i) => (
                    <li key={i} className="small mb-1">
                      • {item}
                    </li>
                  ))}
                </ul>

                <button className="btn btn-dark mt-3">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
