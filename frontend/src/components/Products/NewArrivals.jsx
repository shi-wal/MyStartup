import React, { useRef, useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const NewArrivals = () => {

    const scrollRef=useRef(null);
    const [isDragging, setIsDragging]=useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft]= useState(0);
    const [canScrollLeft, setCanScrollLeft]= useState(false);
    const [canScrollRight, setCanScrollRight]= useState(true);


    const newArrivals = [
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
    ];

        const handleMouseDown = (e) => {
            setIsDragging(true);
            setStartX(e.pageX - scrollRef.current.offsetLeft);
            setScrollLeft(scrollRef.current.scrollLeft);
        };

        const handleMouseMove = (e) => {
            if (!isDragging) return;

            e.preventDefault(); // important → prevents text selection

            const x = e.pageX - scrollRef.current.offsetLeft;
            const walk = (x - startX) * 1.5; // speed multiplier (smooth feel)

            scrollRef.current.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUpOrLeave = () => {
            setIsDragging(false);
         };

        const scrollLeftHandler = () => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({
                left: -300, // scroll left
                behavior: "smooth",
                });
            }
        };

        const scrollRightHandler = () => {
            if (scrollRef.current) {
                  const scrollAmount = scrollRef.current.offsetWidth;
                scrollRef.current.scrollBy({
                left: scrollAmount, // scroll right
                behavior: "smooth",
                });
            }
        };

        const updateScrollButtons = () => {
        const container = scrollRef.current;

        if (container) {
            const scrollLeft = container.scrollLeft;
            const maxScrollLeft =
            container.scrollWidth - container.clientWidth;

            // can scroll left?
            setCanScrollLeft(scrollLeft > 0);

            // can scroll right?
            setCanScrollRight(scrollLeft < maxScrollLeft - 2);
        }
        };

        useEffect(() => {
        const container = scrollRef.current;

        if (container) {
            updateScrollButtons(); // initial check

            container.addEventListener("scroll", updateScrollButtons);
        }

        return () => {
            if (container) {
            container.removeEventListener("scroll", updateScrollButtons);
            }
        };
        }, []);

  return (
        <section className="py-12 px-4 lg:px-0">
            <div className="container mx-auto text-center mb-10 relative mt-8">
                
                <h2 className="text-3xl font-bold mb-4 uppercase text-gray-800">
                Latest Collection
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                Discover our latest sweet handmade goodies, crafted with love to spread smiles and make every gift extra special.
                </p>

                {/* Scroll Buttons */}
                <div className="absolute right-0 bottom-[-30px] flex space-x-2">
                
                <button onClick={scrollLeftHandler} disabled={!canScrollLeft}
                    className={`p-2 rounded border transition ${
                    canScrollLeft
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                >
                    <FiChevronLeft className="text-2xl" />
                </button>

                <button onClick={scrollRightHandler} disabled={!canScrollRight} 
                className={`p-2 rounded border transition ${
                    canScrollRight
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-gray-200 text-gray-400 cursor-not-allowed"
                }`}
                >
                    <FiChevronRight className="text-2xl" />
                </button>

                </div>

            </div>

            {/* scrollable content */}
            <div ref={scrollRef} className={`container mx-auto overflow-x-auto flex space-x-6 relative scrollbar-hide px-4 ${isDragging?"cursor-grabbing":"cursor-grab"}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            >

            {newArrivals.map((product) => (
                <Link to={`/product/${product._id}`} key={product._id} className="block">
                <div
                className="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] relative group"
                >

                {/* Product Image */}
                <img
                    src={product.images[0]?.url}
                    alt={product.images[0]?.altText || product.name}
                    className="w-full h-[400px] object-cover rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105"
                    draggable="false"
                />

                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition duration-300">
                    
                    
                    <h4 className="font-semibold text-lg">{product.name}</h4>
                    <p className="mt-1 text-sm text-gray-200">₹{product.price}</p>


                </div>

                </div>
                </Link>

            ))}

            </div>
        </section>
  )
}

export default NewArrivals