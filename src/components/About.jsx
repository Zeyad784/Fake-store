import React from 'react';
export default function About() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">About FakeStore</h1>
        <p className="lead text-muted">Your one‑stop shop for premium products</p>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-shop fs-1"></i>
              </div>
              <h3 className="card-title">Our Story</h3>
              <p className="card-text">
                FakeStore was founded in 2025 with a simple mission: to provide high‑quality products at affordable prices. 
                We believe shopping should be enjoyable, seamless, and secure. Our curated collection includes fashion, 
                electronics, accessories, and more – all from trusted suppliers.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body p-4">
              <div className="text-primary mb-3">
                <i className="bi bi-eye fs-1"></i>
              </div>
              <h3 className="card-title">Our Vision</h3>
              <p className="card-text">
                To become the most customer‑centric online store, offering an unparalleled shopping experience 
                with a focus on innovation, transparency, and community. We’re constantly improving to meet your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4 g-4">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body">
              <i className="bi bi-truck fs-1 text-primary"></i>
              <h5 className="mt-3">Fast Delivery</h5>
              <p>Free shipping on orders over $50</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body">
              <i className="bi bi-shield-check fs-1 text-primary"></i>
              <h5 className="mt-3">Secure Payments</h5>
              <p>Your data is always protected</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm text-center">
            <div className="card-body">
              <i className="bi bi-headset fs-1 text-primary"></i>
              <h5 className="mt-3">24/7 Support</h5>
              <p>We're here to help anytime</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}