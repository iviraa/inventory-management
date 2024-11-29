"use client";
import { useCreateProductMutation, useGetProductsQuery } from "@/state/api";
import React from "react";
import { useState } from "react";
import Header from "../(components)/Header";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import Rating from "../(components)/Rating";
import CreateProductModal from "./CreateProduct";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};
const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const {
    data: products,
    isError,
    isLoading,
  } = useGetProductsQuery(searchTerm);

  const [createProduct] = useCreateProductMutation();

  const handleCreateModal = async (productData: ProductFormData) => {
    await createProduct(productData);
  };

  if (isError || !products) {
    return (
      <div className=" text-center text-red-500 m-5 py-4">
        Failed to fetch products
      </div>
    );
  }

  if (isLoading) {
    return <div className="m-5 py-4">Loading...</div>;
  }

  return (
    <div className="mx-auto pb-5 w-full">
      {/* Search */}

      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded-full ">
          <SearchIcon className="w-5 h-5 m-2 text-gray-700" />
          <input
            className="p-2 w-full bg-white  "
            placeholder="Search for items"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 ">
        <Header name="Products" />
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700  text-gray-200 font-bold py-2 px-4 rounded-2xl "
          onClick={() => setModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" />
          Create Product
        </button>
      </div>

      {/* Products List */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
        {isLoading ? (
          <div className="m-5">Loading...</div>
        ) : (
          products?.map((product) => (
            <div
              key={product.productId}
              className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
            >
              <div className="flex flex-col items-center">
                img
                <h3 className="text-lg text-gray-900 font-semibold">
                  {product.name}
                </h3>
                <p className="text-gray-800 font-semibold">
                  ${product.price.toFixed(2)}
                </p>
                <div className="text-sm text-gray-600 mt-1">
                  Stock:{product.stockQuantity}
                </div>
                {product.rating && (
                  <div className="flex items-center mt-2">
                    <Rating rating={product.rating} />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/*Modal*/}

      <CreateProductModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onCreate={handleCreateModal}
      />
    </div>
  );
};

export default Products;
