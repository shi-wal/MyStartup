import React from 'react'
import { useState } from 'react';
import { HiMagnifyingGlass, HiMiniXMark } from 'react-icons/hi2';

const SearchBar = () => {
    const [searchTerm, setSearchTerm]=useState("");
    const [isOpen, setIsOpen]=useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search item: ", searchTerm);
        setIsOpen(false);
    };

  return (
    <div className={`flex items-center justify-center w-full transition-all duration-300 ${isOpen?
        "absolute top-0 left-0 w-full bg-white h-24 z-50": "w-auto"}`}>
        {isOpen ? (
            <form className='relative flex items-center justify-center w-full' onSubmit={handleSearch}>
                <div className='relative w-1/2'>
                    <input type='text' placeholder='Search' value={searchTerm} 
                    className='bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-600'
                    onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <button type='submit' className='absolute right-2 top-1/2 transform -translate-y-1/2'>
                        <HiMagnifyingGlass className='h-7 w-6 text-gray-600 hover:text-black' />
                    </button>
                </div>
                {/* close X button */}
                <button type='button' onClick={handleSearchToggle} className='absolute right-8 top-1/2 transform -translate-y-1/2'>
                    <HiMiniXMark className='h-6 w-6 text-gray-600 hover:text-black'/>
                </button>
            </form>
        ):(
            <button onClick={handleSearchToggle}>
                <HiMagnifyingGlass className='h-7 w-6 text-gray-600 hover:text-black'/>
            </button>
        )}
    </div>
  );
};

export default SearchBar