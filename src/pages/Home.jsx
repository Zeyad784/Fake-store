import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import ClipLoader from 'react-spinners/ClipLoader';

export default function Home() {
  const { products, loading } = useContext(ProductContext);
  const featuredProducts = products.slice(0, 6);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <ClipLoader color="#0d6efd" size={60} />
      </div>
    );
  }

  return (
    <>
      <div style={{ backgroundColor: '#faf8f5', padding: '3rem 0', marginBottom: '2rem' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: '2.8rem', fontWeight: 'normal', marginBottom: '1rem' }}>
            Welcome to FakeStore
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Real products, real prices. We're just getting started.
          </p>
          <Link to="/products" className="btn btn-outline-primary btn-lg px-4">
            Browse products
          </Link>
        </div>
      </div>

      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Featured Products</h2>
          <p className="text-muted">A few of our favorites to get you started</p>
        </div>

        <div className="row">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-5 mb-5">
          <Link to="/products" className="btn btn-outline-primary btn-lg px-5">
            View All Products
          </Link>
        </div>

        <div className="row text-center mt-5 pt-4 border-top">
          <div className="col-md-4 mb-4">
            <i className="bi bi-truck fs-1 text-primary"></i>
            <h5 className="mt-2">Fast Delivery</h5>
            <p>Usually within 3 days</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-credit-card fs-1 text-primary"></i>
            <h5 className="mt-2">Secure Payments</h5>
            <p>All major cards accepted</p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-arrow-repeat fs-1 text-primary"></i>
            <h5 className="mt-2">Free Returns</h5>
            <p>Within 14 days, no questions asked</p>
          </div>
        </div>
      </div>
    </>
  );
}






































