import { useEffect, useState } from "react";
import { FiClock, FiPackage } from "react-icons/fi";
import { toast } from "sonner";

const selectedProduct = {
  name: "Product 1",
  price: 229,
  originalPrice: 259,
  material: "Cotton",
  description: "This unique piece adds a personal touch to every moment. Perfect for gifting or cherishing your own special occasions.",
  images: [
    {
        url: "https://picsum.photos/500/500?random=1",
        altText: "Dummy product 1",
    },
    {
        url: "https://picsum.photos/500/500?random=2",
        altText: "Dummy product 2",
    },
  ]
};

const ProductDetails = () => {
    const [mainImage, setMainImage]=useState(null);
    const [quantity, setQuantity]=useState(1);
    const [isButtonDisabled, setIsButtonDisabled]=useState(false);
    const [isWishlisted, setIsWishlisted]=useState(false);

    useEffect(()=>{
        if(selectedProduct?.images?.length>0){
            setMainImage(selectedProduct.images[0].url)
        }
    }, [selectedProduct])

    const handleQuantityChange= (action)=>{
        if(action==="plus") setQuantity((prev)=> prev+1)
        if(action==="minus" && quantity>0) setQuantity((prev)=> prev-1)
    }

    const handleAddToCart=()=>{
        if(quantity<1){
            toast.error("Please select the quantity before adding to the cart!",{
                duration: 1000,
            })
            return;
        }
         setIsButtonDisabled(true) 
         setTimeout(()=>{
            toast.success("Product added to the cart!",{
                duration: 1000,
            })
            setIsButtonDisabled(false)
         }, 500)  
    }

    const handleWishlist=()=>{
        if(!isWishlisted){
            toast.success("Product added to wishlist!",{
                    duration: 1000,
            })
            setIsWishlisted(true)
        }
        else{
            toast.success("Product removed from wishlist!",{
                    duration: 1000,
            })
            setIsWishlisted(false)
        }
    }

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row items-start">

          {/* Left Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
                <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage===image.url?
                    "border-[#B76E79]":"border-gray-300"
                }`}
                onClick={()=> setMainImage(image.url)}
                />
            ))}
            </div>

            {/* Main Image */}
            <div className="md:w-1/2">
            <div className="mb-4">
                <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
                />
            </div>
            </div>

            {/* Mobile Thumbnail */}
            <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
                <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage===image.url?
                    "border-[#B76E79]":"border-gray-300"
                }`}
                onClick={()=> setMainImage(image.url)}
                />
            ))}
            </div>

            {/* Right Side */}
            <div className="md:w-1/2 md:ml-12 flex flex-col items-start">
                <h1 className="text-2xl md:text-2xl font-semibold mb-2">
                    {selectedProduct.name}
                </h1>
                <div className="w-12 h-[2px] bg-[#B76E79] mb-5"></div>
                
                <div className="flex items-center gap-3 mb-7">
                {selectedProduct.originalPrice && (
                    <span className="text-gray-400 line-through text-xl">
                    ₹{selectedProduct.originalPrice}
                    </span>
                )}

                <span className="text-xl font-semibold text-[#B76E79]">
                    ₹{selectedProduct.price}
                </span>

                {selectedProduct.originalPrice && (
                    <span className="text-sm text-green-600 font-medium">
                    {Math.round(
                        ((selectedProduct.originalPrice - selectedProduct.price) /
                        selectedProduct.originalPrice) *
                        100
                    )}% OFF
                    </span>
                )}
                </div>

               

                <p className="text-gray-500 leading-relaxed max-w-md mb-3 text-left">
                    {selectedProduct.description}
                </p>
                <p className="text-gray-600 font-semibold leading-relaxed max-w-md mb-8">
                    Material: <span className="font-normal text-gray-500">{selectedProduct.material}</span>
                </p>

                <div className="mb-6 items-start">
                <p className="text-gray-700 font-medium text-left">Quantity:</p>

                <div className="flex items-center space-x-4 mt-2">
                    <button onClick={()=> handleQuantityChange("minus")} className="px-3 py-1 bg-[#F8EDEB] text-[#B76E79] rounded-md text-lg hover:bg-[#E8CFCB] transition">
                    -
                    </button>

                    <span className="text-lg font-medium text-gray-800">{quantity}</span>

                    <button onClick={()=> handleQuantityChange("plus")} className="px-3 py-1 bg-[#F8EDEB] text-[#B76E79] rounded-md text-lg hover:bg-[#E8CFCB] transition">
                    +
                    </button>
                </div>
                </div>

                <div className="flex gap-3 mb-4">
  
                    {/* Add to Cart */}
                    <button disabled={isButtonDisabled}
                    onClick={handleAddToCart} 
                    className={`flex-1 bg-[#B76E79] text-white py-3 px-6 rounded-lg ${
                        isButtonDisabled? "cursor-not-allowed opacity-50": "hover:bg-[#A85C65] transition duration-300 shadow-sm"
                    }`}>
                        {isButtonDisabled?"Adding...":"ADD TO CART"}
                    </button>

                    {/* Wishlist */}
                    <div className="relative group">
                        <button onClick={handleWishlist} className={`flex items-center justify-center px-4 py-3 rounded-lg border border-[#B76E79] hover:bg-[#F8EDEB] transition ${isWishlisted?"text-white bg-[#B76E79]":"text-[#B76E79]"}`}>
                        ❤
                        </button>

                        {/* Tooltip */}
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#B76E79] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
                        {isWishlisted?"Remove from wishlist":"Add to wishlist"}
                        </span>
                    </div>
                </div>

                <div className="border-t pt-4 mt-4">
                <div className="mt-4 space-y-2">

                <div className="flex items-center text-sm text-gray-600">
                    <FiClock className="text-[#B76E79] mr-2" />
                    Estimated delivery time: <span className="ml-1 font-medium">8–12 days</span>
                </div>

                <div className="flex items-center text-sm text-gray-600">
                    <FiPackage className="text-[#B76E79] mr-2" />
                    High delivery time due to <span className="ml-1 font-medium">handmade products</span>
                </div>

                </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;