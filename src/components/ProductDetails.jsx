import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { useCart } from '../context/CartContext';
import { ProductContext } from '../context/ProductContext';

export default function ProductDetails() {
  const { id } = useParams();
  const { products, loading: productsLoading } = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (products.length > 0) {
      const found = products.find(p => p.id === parseInt(id));
      setProduct(found);
    }
  }, [products, id]);

  const handleAddToCart = () => {
    if (!product) return;
    addToCart(product, quantity);
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${product.title} (x${quantity}) has been added successfully.`,
      confirmButtonColor: '#0d6efd',
      timer: 2000,
      showConfirmButton: false,
    });
  };

  if (productsLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{product.title} - FakeStore</title>
      </Helmet>

      <Link to="/products" className="btn btn-outline-secondary mb-4">
        ← Back to Products
      </Link>

      <div className="card mb-3 p-3">
        <div className="row">
          <div className="col-md-4">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>
          <div className="col-md-8">
            <h3>{product.title}</h3>
            <p className="text-muted">{product.category}</p>
            <p>{product.description}</p>
            <h4 className="text-primary">${product.price}</h4>
            <div className="d-flex align-items-center gap-3 mt-3">
              <div className="input-group" style={{ width: '130px' }}>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </button>
                <input
                  type="number"
                  className="form-control text-center"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                />
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </button>
              </div>
              <button onClick={handleAddToCart} className="btn btn-primary btn-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}