import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    let newErrors = {};

    if (form.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter valid email";
    }

    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Contact Us</h2>

        <div className="row shadow-lg rounded-4 p-4 bg-white">

          {/* Contact Info */}
          <div className="col-md-5 mb-4">
            <h5 className="fw-bold">Get In Touch</h5>
            <p className="text-muted">
              Have a project or business promotion in mind? Let's work together.
            </p>

            <div className="mt-4">
              <p className="mb-2 text-muted">Wazirabad Jagatpur, Delhi</p>
              <p className="mb-2 text-muted">+91 8076723073</p>
              <p className="text-muted">info@yourproject.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="col-md-7">
            {success && (
              <div className="alert alert-success">
                Message sent successfully!
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className={`form-control ${errors.name && "is-invalid"}`}
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <div className="invalid-feedback">
                    {errors.name}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className={`form-control ${errors.email && "is-invalid"}`}
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <div className="invalid-feedback">
                    {errors.email}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <textarea
                  name="message"
                  rows="4"
                  className={`form-control ${errors.message && "is-invalid"}`}
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <div className="invalid-feedback">
                    {errors.message}
                  </div>
                )}
              </div>

              <button
                className="btn btn-dark w-100"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
