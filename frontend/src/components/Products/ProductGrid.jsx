import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products = [], loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <section>
      {/* Grid */}
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link
            key={index}
            to={`/product/${product._id}`}
            className="group block cursor-pointer"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={product.images[0].url}
                alt={product.images[0].alText || product.name}
                className="w-full h-[400px] object-cover rounded-xl transform group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Text */}
            <div className="mt-3 text-left">
              <h3 className="text-sm font-medium text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm mt-1">₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
