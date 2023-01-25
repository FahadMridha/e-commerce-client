import { Card } from "flowbite-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsView = ({ product }) => {
  const { _id, name, price, details, picture } = product;
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate("/details", { state: product });
  };

  return (
    <div>
      <div>
        <Card>
          <img className="h-64 object-contain" src={picture} alt={name} />
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            {details.slice(0, 100)}
          </p>
          <p className="font-medium">{price}</p>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <button
              onClick={handleDetail}
              className="inline-flex items-center rounded-lg bg-blue-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to Cart
            </button>
            <button
              onClick={handleDetail}
              className="inline-flex items-center rounded-lg border border-gray-300 bg-white py-2 px-4 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
              View Details
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProductsView;
