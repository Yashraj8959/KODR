import React, { useState } from 'react';

function ProductSearch() {
  const [products, setProducts] = useState([
    { name: "Apple", price: 0.99 },
    { name: "Banana", price: 0.59 },
    { name: "Orange", price: 0.79 },
    { name: "Grapes", price: 1.99 },
    { name: "Pineapple", price: 2.99 }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Product Search</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <ul className="space-y-2">
        {filteredProducts.map((product) => (
          <li 
            key={product.name} 
            className="flex justify-between items-center bg-gray-100 p-2 rounded-md"
          >
            <span>{product.name}</span>
            <span className="font-semibold">
              ${product.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductSearch;