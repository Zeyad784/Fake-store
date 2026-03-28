import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Checkout() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'credit',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.address) {
      Swal.fire('Error', 'Please fill all required fields', 'error');
      return;
    }
    Swal.fire({
      title: 'Order Placed!',
      text: 'Thank you for your purchase. Your order has been received.',
      icon: 'success',
      confirmButtonText: 'OK',
    }).then(() => {
      clearCart();
      navigate('/');
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>Your Cart is Empty</h2>
        <p>Add items to cart before checkout.</p>
        <Link to="/products" className="btn btn-primary">Go to Products</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>
      <div className="row">
        <div className="col-md-7">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name *</label>
              <input type="text" name="fullName" className="form-control" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Email *</label>
              <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Address *</label>
              <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} required />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">City</label>
                <input type="text" name="city" className="form-control" value={formData.city} onChange={handleChange} />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Postal Code</label>
                <input type="text" name="postalCode" className="form-control" value={formData.postalCode} onChange={handleChange} />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Payment Method</label>
              <select name="paymentMethod" className="form-select" value={formData.paymentMethod} onChange={handleChange}>
                <option value="credit">Credit Card (Demo)</option>
                <option value="paypal">PayPal (Demo)</option>
                <option value="cod">Cash on Delivery</option>
              </select>
            </div>
            <button type="submit" className="btn btn-success btn-lg">Place Order</button>
          </form>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-header bg-dark text-white">Order Summary</div>
            <div className="card-body">
              {cartItems.map(item => (
                <div key={item.id} className="d-flex justify-content-between mb-2">
                  <span>{item.title.substring(0, 30)} x{item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <hr />
              <div className="d-flex justify-content-between fw-bold">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}