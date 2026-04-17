import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic Oxford Button-Down Shirt",
    price: "319",
    image: "https://picsum.photos/300/400?random=1",
  },
  {
    id: 2,
    name: "Slim-Fit Stretch Shirt",
    price: "129",
    image: "https://picsum.photos/300/400?random=2",
  },
  {
    id: 3,
    name: "Casual Denim Shirt",
    price: "499",
    image: "https://picsum.photos/300/400?random=3",
  },
  {
    id: 4,
    name: "Printed Resort Shirt",
    price: "299",
    image: "https://picsum.photos/300/400?random=4",
  },
];

const ProductGrid = () => {
  return (
    <section>
      {/* Grid */}
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
            <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="group block cursor-pointer"
            >
                {/* Image */}
                <div className="overflow-hidden rounded-xl">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[400px] object-cover rounded-xl transform group-hover:scale-105 transition duration-300"
                />
                </div>

                {/* Text */}
                <div className="mt-3 text-left">
                <h3 className="text-sm font-medium text-gray-800">
                    {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                    ₹{product.price}
                </p>
                </div>
            </Link>
         ))}
      </div>
    </section>
  );
};

export default ProductGrid;