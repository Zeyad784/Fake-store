import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Swal from 'sweetalert2';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    addToCart(product);

    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.title.substring(0, 50)}... has been added.`,
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Go to Cart',
      cancelButtonText: 'Continue Shopping',
      confirmButtonColor: '#0d6efd',
      cancelButtonColor: '#6c757d'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/cart');
      }
    });
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={product.image} className="card-img-top p-3" alt={product.title} style={{ height: '250px', objectFit: 'contain' }} />
        <div className="card-body">
          <Link to={`/product/${product.id}`} className="text-decoration-none text-dark">
            <h5 className="card-title">{product.title}</h5>
          </Link>
          <p className="card-text text-truncate">{product.description}</p>
          <p className="card-text fw-bold">${product.price}</p>
          <div className="d-flex gap-2">
            <button onClick={handleAddToCart} className="btn btn-success flex-grow-1">
              Add to Cart
            </button>
            <Link to={`/product/${product.id}`} className="btn btn-outline-primary">
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}