import React from 'react'
import Hero from '../components/Layout/Hero'
import NewArrivals from '../components/Products/NewArrivals'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturesSection from '../components/Products/FeaturesSection'
import ProductDetails from '../components/Products/ProductDetails'

const Home = () => {
  return (
    <div>
        <Hero />
        <NewArrivals />
        <section className="py-12 px-4 lg:px-0">
          {/* Title */}
          <div className="container mx-auto text-center mb-8 mt-2">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase">
              Our Bestseller
            </h2>
            <ProductDetails />
          </div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase text-center mb-6">
              You may also like
            </h2>
            <ProductGrid />
          </section>
        <FeaturesSection />
    </div>
  )
}

export default Home