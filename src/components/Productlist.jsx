import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import ProductCard from './productCard'
import ClipLoader from 'react-spinners/ClipLoader'

export default function ProductList() {
  const { products, categories, loading, getAllProducts, getProductsByCategory } = useContext(ProductContext)

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <ClipLoader color="#0d6efd" size={60} />
      </div>
    )
  }

  return (
    <>
      <div className="mb-3 mt-2">
        <button className="btn btn-outline-primary" onClick={getAllProducts}>
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            className="btn btn-outline-secondary "
            onClick={() => getProductsByCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}