import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting us. We will get back to you soon.',
      confirmButtonColor: '#0d6efd'
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Contact Us</h1>
        <p className="lead text-muted">We'd love to hear from you</p>
      </div>

      <div className="row g-5">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h3 className="mb-4">Get in Touch</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100 py-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-body p-4">
              <h3 className="mb-4">Contact Information</h3>
              <div className="d-flex mb-3">
                <i className="bi bi-geo-alt fs-4 text-primary me-3"></i>
                <div>
                  <h5>Address</h5>
                  <p className="mb-0">123 Fake Street, Cairo, Egypt</p>
                </div>
              </div>
              <div className="d-flex mb-3">
                <i className="bi bi-envelope fs-4 text-primary me-3"></i>
                <div>
                  <h5>Email</h5>
                  <p className="mb-0">support@fakestore.com</p>
                </div>
              </div>
              <div className="d-flex mb-4">
                <i className="bi bi-telephone fs-4 text-primary me-3"></i>
                <div>
                  <h5>Phone</h5>
                  <p className="mb-0">+20 123 456 7890</p>
                </div>
              </div>
              <hr />
              <h5 className="mt-3">Follow Us</h5>
              <div className="d-flex gap-3 mt-2">
                <a href="#" className="text-dark fs-4"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-dark fs-4"><i className="bi bi-twitter-x"></i></a>
                <a href="#" className="text-dark fs-4"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>

          {/* Map placeholder (OpenStreetMap) */}
          <div className="card border-0 shadow-sm mt-4">
            <div className="card-body p-0">
              <iframe
                title="Store Location"
                width="100%"
                height="250"
                frameBorder="0"
                style={{ border: 0, borderRadius: '0.5rem' }}
                src="https://www.openstreetmap.org/export/embed.html?bbox=31.2268%2C30.0444%2C31.2418%2C30.0558&amp;layer=mapnik&amp;marker=30.0501%2C31.2343"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}