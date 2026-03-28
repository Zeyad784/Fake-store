import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>Your Cart is Empty</h2>
        <p>Start adding some products!</p>
        <Link to="/products" className="btn btn-primary">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="table-responsive">
        <table className="table table-bordered align-middle">
          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} className="me-3" />
                    <span>{item.title.substring(0, 40)}</span>
                  </div>
                </td>
                <td>${item.price}</td>
                <td style={{ width: '120px' }}>
                  <div className="input-group">
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <input type="number" className="form-control text-center" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)} style={{ maxWidth: '60px' }} />
                    <button className="btn btn-outline-secondary btn-sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="table-active">
              <td colSpan="3" className="text-end fw-bold">Grand Total:</td>
              <td className="fw-bold">${getCartTotal().toFixed(2)}</td>
              <td>
                <button className="btn btn-warning btn-sm" onClick={clearCart}>Clear Cart</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="d-flex justify-content-between mt-4">
        <Link to="/products" className="btn btn-secondary">Continue Shopping</Link>
        <Link to="/checkout" className="btn btn-success">Proceed to Checkout</Link>
      </div>
    </div>
  );
}