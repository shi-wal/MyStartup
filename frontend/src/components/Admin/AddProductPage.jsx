import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct } from "../../redux/slices/productsSlice";
import axios from "axios";

const AddProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.products);

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: [],
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: [],
    images: [],
  });

  const [uploading, setUploading] = useState(false); // Image uploading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );
      setProductData((prevData) => ({
        ...prevData,
        images: [...prevData.images, { url: data.imageUrl, altText: "" }],
      }));

      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const handleRemoveImage = (indexToRemove) => {
    setProductData((prevData) => ({
      ...prevData,
      images: prevData.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createProduct(productData));

    navigate("/admin/products");
  };

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error}</p>;

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Add Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Count in Stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Count in Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Sku */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* category */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Category (comma-separated)
          </label>

          <input
            type="text"
            value={productData.category.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                category: e.target.value
                  .split(",")
                  .map((cat) => cat.trim())
                  .filter(Boolean),
              })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Embroidery, Gifts, Scrapbooks"
          />
        </div>

        {/* collection */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Collection</label>

          <input
            type="text"
            name="collections"
            value={productData.collections}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* gender */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Gender</label>

          <div className="flex gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={productData.gender.includes("Men")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setProductData({
                      ...productData,
                      gender: [...productData.gender, "Men"],
                    });
                  } else {
                    setProductData({
                      ...productData,
                      gender: productData.gender.filter((g) => g !== "Men"),
                    });
                  }
                }}
              />
              Men
            </label>

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={productData.gender.includes("Women")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setProductData({
                      ...productData,
                      gender: [...productData.gender, "Women"],
                    });
                  } else {
                    setProductData({
                      ...productData,
                      gender: productData.gender.filter((g) => g !== "Women"),
                    });
                  }
                }}
              />
              Women
            </label>
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>

          <input type="file" onChange={handleImageUpload} />
          {uploading && <p>Uploading image...</p>}
          <div className="flex gap-4 mt-4 flex-wrap">
            {productData.images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />

                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-gray-600
            transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
