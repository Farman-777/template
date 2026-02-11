import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully");
  };

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>

        <form onSubmit={handleSubmit} className="col-md-6 mx-auto">
          <input
            type="text"
            name="name"
            className="form-control mb-3"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            className="form-control mb-3"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="4"
            className="form-control mb-3"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="btn btn-dark w-100">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
