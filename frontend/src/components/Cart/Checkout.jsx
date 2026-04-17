import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PayPalButton from './PayPalButton'

const cart= {
    products: [
        {
            productId: 1,
            name: "Hanky",
            quantity: 1,
            price: 269,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Hanky with Initials",
            quantity: 1,
            price: 289,
            image: "https://picsum.photos/200?random=2",
        },
    ],
    totalPrice: 558,
}

const Checkout = () => {
    const navigate=useNavigate();
    const [checkoutId, setCheckoutId]=useState(null)
    const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const handleCreateCheckout=(e)=>{
        e.preventDefault();
        setCheckoutId(123);
  }

  const handlePaymentSuccess=(details)=>{
    console.log("Payment successful", details)
    navigate("/order-confirmation")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
      
     {/* Left Section */}
        <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>

        <form onSubmit={handleCreateCheckout}>
            <h3 className="text-lg mb-4 text-[#B76E79] font-semibold">Contact Details</h3>

            <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
                type="email"
                value="user@example.com"
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
                disabled
            />
            </div>
            <h3 className="text-lg mb-4 text-[#B76E79] font-semibold">Delivery</h3>

            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">First Name</label>
                    <input
                    type="text"
                    value={shippingAddress.firstName}
                    onChange={(e) =>
                        setShippingAddress({
                        ...shippingAddress,
                        firstName: e.target.value,
                        })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
                    required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Last Name</label>
                    <input
                    type="text"
                    value={shippingAddress.lastName}
                    onChange={(e) =>
                        setShippingAddress({
                        ...shippingAddress,
                        lastName: e.target.value,
                        })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Address</label>
                <input
                    type="text"
                    value={shippingAddress.address}
                    onChange={(e) =>
                    setShippingAddress({
                        ...shippingAddress,
                        address: e.target.value,
                    })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
                    required
                />
            </div>

            <div className="mb-4 grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700">City</label>
                    <input
                    type="text"
                    value={shippingAddress.city}
                    onChange={(e) =>
                        setShippingAddress({
                        ...shippingAddress,
                        city: e.target.value,
                        })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
                    required
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Postal Code</label>
                    <input
                    type="text"
                    value={shippingAddress.postalCode}
                    onChange={(e) =>
                        setShippingAddress({
                        ...shippingAddress,
                        postalCode: e.target.value,
                        })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
                    />
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <input
                    type="text"
                    value={shippingAddress.country}
                    onChange={(e) =>
                    setShippingAddress({
                        ...shippingAddress,
                        country: e.target.value,
                    })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                    type="tel"
                    value={shippingAddress.phone}
                    onChange={(e) =>
                    setShippingAddress({
                        ...shippingAddress,
                        phone: e.target.value,
                    })
                    }
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#B76E79] transition"
                    required
                />
            </div>

            <div className="mt-6">
                {!checkoutId ? (
                    <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#D8A7B1] to-[#B76E79] text-white py-3 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition"
                    >
                    Continue to Payment
                    </button>
                ) : (
                    <div>
                        <h3 className="text-lg mb-4 font-semibold">Pay with PayPal</h3>

                        {/* PayPal Component */}
                        <PayPalButton amount={100} onSuccess={handlePaymentSuccess} onError={(err)=>alert("Payment failed, try again!")} />
                    </div>
                )}
            </div>

        </form>
        </div>
        
        {/* Right Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg mb-4 font-semibold text-[#B76E79]">Order Summary</h3>

            <div className="border-t py-4 mb-4">
                {cart.products.map((product, index) => (
                <div
                    key={index}
                    className="flex items-start justify-between py-2 border-b"
                >
                    <div className="flex items-start gap-4">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-20 h-24 object-cover rounded-md mr-4"
                    />
                    <div>
                        <h3 className="text-md font-medium">{product.name}</h3>
                        
                        <p className="text-gray-500 text-sm">
                            Quantity: {product.quantity}
                        </p>
                    </div>

                    </div>
                    <p className="text-lg font-semibold">
                        ₹{product.price?.toLocaleString()}</p>
                </div>
                ))}
            </div>
            <div className="flex justify-between items-center text-lg mb-4">
                <p>Subtotal</p>
                <p>₹{cart.totalPrice?.toLocaleString()}</p>
                </div>

                <div className="flex justify-between items-center text-lg">
                <p>Shipping</p>
                <p className='text-green-600'>Free</p>
                </div>

                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                <p className="font-semibold text-[#B76E79]">Total</p>
                <p className="font-semibold text-[#B76E79]">
                    ₹{cart.totalPrice?.toLocaleString()}
                </p>
            </div>
        </div>
    </div>
  );
}

export default Checkout