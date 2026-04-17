import React, { useEffect, useRef, useState } from 'react'
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Products/FilterSidebar';
import ProductGrid from '../components/Products/ProductGrid';
import SortOptions from '../components/Products/SortOptions';


const CollectionPage = () => {
    const [products, setProducts]=useState([]);
    const sidebarRef= useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar =()=>{
        setIsSidebarOpen(!isSidebarOpen);
    }

    const handleClickOutside=(e)=>{
        if(sidebarRef.current && !sidebarRef.current.contains(e.target)){
            setIsSidebarOpen(false)
        }
    }

    useEffect(()=>{
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[]);

    useEffect(()=>{
        setTimeout(() =>{
                const fetchProducts = [
        {
            _id: "1",
            name: "sample 1",
            price: 120,
            images: [{ url: "https://picsum.photos/500/500?random=1", altText: "sample 1" }],
        },
        {
            _id: "2",
            name: "sample 2",
            price: 80,
            images: [{ url: "https://picsum.photos/500/500?random=2", altText: "sample 2" }],
        },
        {
            _id: "3",
            name: "sample 3",
            price: 180,
            images: [{ url: "https://picsum.photos/500/500?random=3", altText: "sample 3" }],
        },
        {
            _id: "4",
            name: "sample 4",
            price: 210,
            images: [{ url: "https://picsum.photos/500/500?random=4", altText: "sample 4" }],
        },
        ]
        setProducts(fetchProducts)
      }, 1000)
    }, [])

  return (
        <div className="flex flex-col lg:flex-row">

            {/* Mobile Filter button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden border px-4 py-2 mb-4 flex items-center bg-white shadow rounded-lg justify-center"
            >
                <FaFilter className="mr-2" /> Filters
            </button>

            {/* Filter Sidebar */}
            <div
                ref={sidebarRef}
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#F8EDEB] overflow-y-auto shadow-lg transform transition-transform duration-300 ease-in-out 
                    lg:static lg:translate-x-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <FilterSidebar />
            </div>

             {/* Main Page */}
            <div className="flex-grow p-4 mx-5">
                <h2 className="text-2xl uppercase mb-4 text-gray-700">
                    All Collection
                </h2>

                {/* Sort Options */}
                <SortOptions />

                {/* Product Grid */}
                <ProductGrid products={products} />
            </div>            

        </div>
  )
}

export default CollectionPage