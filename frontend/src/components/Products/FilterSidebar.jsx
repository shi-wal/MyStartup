import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate= useNavigate();
  const [filters, setFilters] = useState({
    category: [],
    gender: "",
    minPrice: 229,
    maxPrice: 989,
  });

  const [priceRange, setPriceRange] = useState([229, 989]);

  const categories=["Embroided Hankies", "Gift Hampers", "Embroided Keychains", "Aesthetic Collages"]

  const genders=["Him", "Her"]

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category ? params.category.split(",") : [],
      gender: params.gender || "",
      minPrice: params.minPrice || 229,
      maxPrice: params.maxPrice || 989,
    });

    setPriceRange([229, params.maxPrice || 989]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
        const { name, value, checked, type } = e.target;
        let newFilters = { ...filters };

        if (type === "checkbox") {
            if (checked) {
            newFilters[name] = [...(newFilters[name] || []), value];
            } else {
            newFilters[name] = newFilters[name].filter(
                (item) => item !== value
            );
            }
        } else {
            newFilters[name] = value;
        }

        setFilters(newFilters);
        console.log(newFilters);
        updateURLParams(newFilters);
    };

    const updateURLParams = (newFilters) => {
        const params = new URLSearchParams();

        // {category: ["Embroided Hankies", "Gift Hampers"] gender: ["F"]}
        Object.keys(newFilters).forEach((key) => {
            if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
            params.append(key, newFilters[key].join(","));
            } else if (newFilters[key]) {
            params.append(key, newFilters[key]);
            }
        });

        setSearchParams(params);
    };

  return (
    <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-600 mb-5 tracking-wide">
        Filter
        </h3>

        {/* Category Filter */}
        <div className="mb-6">
        <label className="block text-[#A85C65] font-medium mb-2">
            Category
        </label>

        {categories.map((category) => (
            <div
            key={category}
            className="flex items-center mb-1 rounded-md hover:bg-white transition cursor-pointer group"
            >
            <input
                type="checkbox"
                name="category"
                value={category}
                onChange={handleFilterChange}
                checked={filters.category.includes(category)}
                className="mr-2 h-4 w-4 accent-[#B76E79] cursor-pointer border-gray-300"
            />
            <span className="text-gray-700">
                {category}
            </span>
            </div>
        ))}
        </div>

        {/* Gender Filter */}
        <div className="mb-6">
        <label className="block text-[#A85C65] font-medium mb-2">
            Gender
        </label>

        {genders.map((gender) => (
            <div
            key={gender}
            className="flex items-center mb-1 rounded-md hover:bg-white transition cursor-pointer group"
            >
            <input
                type="radio"
                name="gender"
                value={gender}
                onChange={handleFilterChange}
                checked={filters.gender===gender}
                className="mr-2 h-4 w-4 accent-[#B76E79] cursor-pointer border-gray-300"
            />
            <span className="text-gray-700">
                {gender}
            </span>
            </div>
        ))}
        </div>

        {/* Price Range Filter */}
        <div className="mb-6">
        <label className="block text-[#A85C65] font-medium mb-2">
            Price Range
        </label>

        <input
            type="range"
            name="priceRange"
            min={229}
            max={989}
            value={priceRange[1]}
            onChange={(e) => {
                const value = e.target.value;
                setPriceRange([229, value]);

                const newFilters = {
                ...filters,
                maxPrice: value,
                };

                setFilters(newFilters);
                updateURLParams(newFilters);
            }}

            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer accent-[#B76E79]"
        />

        <div className="flex justify-between text-gray-600 mt-2">
            <span>₹229</span>
            <span>₹{priceRange[1]}</span>
        </div>
        </div>
    </div>
);
};

export default FilterSidebar;