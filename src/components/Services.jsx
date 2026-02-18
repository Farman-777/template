import { motion } from "framer-motion";
import { FaCode, FaPalette, FaRocket } from "react-icons/fa";

const servicesData = [
  {
    title: "Web Development",
    desc: "Modern, scalable and high-performance web applications.",
    features: ["React Apps", "Responsive Design", "Clean Architecture"],
    icon: <FaCode size={28} />
  },
  {
    title: "UI/UX Design",
    desc: "User-focused and conversion-driven design systems.",
    features: ["Wireframing", "Design Systems", "Prototyping"],
    icon: <FaPalette size={28} />
  },
  {
    title: "Performance & SEO",
    desc: "Speed optimized and search engine friendly solutions.",
    features: ["Core Web Vitals", "Technical SEO", "Optimization"],
    icon: <FaRocket size={28} />
  }
];

function Services() {
  return (
    <section id="services" className="py-5 bg-gradient">
      <div className="container">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold display-6">Our Services</h2>
          <p className="text-muted">
            We provide premium digital solutions for modern businesses.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="row">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="col-lg-4 col-md-6 mb-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="service-card p-4 h-100 text-center">

                {/* Icon */}
                <div className="icon-circle mb-3 mx-auto">
                  {service.icon}
                </div>

                <h5 className="fw-bold mt-2">{service.title}</h5>
                <p className="text-muted small">{service.desc}</p>

                <ul className="list-unstyled mt-3 text-start">
                  {service.features.map((item, i) => (
                    <li key={i} className="small mb-2 feature-item">
                      {item}
                    </li>
                  ))}
                </ul>

                <button className="btn btn-dark mt-3 px-4">
                  Learn More
                </button>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* CSS */}
      <style jsx>{`
        .bg-gradient {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
        }

        .service-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          transition: 0.4s ease;
          border: 1px solid rgba(0, 0, 0, 0.05);
        }

        .service-card:hover {
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .icon-circle {
          width: 60px;
          height: 60px;
          background: #111;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: 0.3s;
        }

        .service-card:hover .icon-circle {
          transform: rotate(10deg) scale(1.1);
        }

        .feature-item {
          position: relative;
          padding-left: 18px;
        }

        .feature-item::before {
          content: "•";
          position: absolute;
          left: 0;
          color: #111;
          font-weight: bold;
        }

        button:hover {
          background-color: #333 !important;
          transition: 0.3s;
        }
      `}</style>
    </section>
  );
}

export default Services;
