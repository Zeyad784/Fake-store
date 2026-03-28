import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          FakeStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/products">Products</NavLink>
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </div>
          <div className="navbar-nav">
            <Link to="/cart" className="nav-link position-relative">
              <i className="bi bi-cart"></i> Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}