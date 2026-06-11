import React from "react";
import Hero from "../components/Layout/Hero";
import NewArrivals from "../components/Products/NewArrivals";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturesSection from "../components/Products/FeaturesSection";
import ProductDetails from "../components/Products/ProductDetails";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch best seller product
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`,
        );

        setBestSellerProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <NewArrivals />
      <section id="bestseller" className="py-12 px-4 lg:px-0">
        {/* Title */}
        <div className="container mx-auto text-center mb-8 mt-2">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-gray-800 uppercase">
            Our Bestseller
          </h2>
          {bestSellerProduct ? (
            <ProductDetails productId={bestSellerProduct._id} />
          ) : (
            <p className="text-center">Loading best seller product...</p>
          )}
        </div>
        {/*
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase text-center mb-6">
          You may also like
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
        */}
      </section>
      <FeaturesSection />
    </div>
  );
};

export default Home;
