import React, { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import Header from "../(components)/Header";

type ProductFormData = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    });
  };

  const labelCssStyles = "block text-sm font-medium text-gray-700";

  const inputCssStyles =
    "block w-full mb-2 p-2 border-gray-500 text-gray-700 border-2 rounded-md placeholder:text-gray-500";

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-20">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <Header name="Add Product" />
        <form onSubmit={handleSubmit} className="mt-5">
          {/* Product Name */}
          <label htmlFor="productName" className={labelCssStyles}>
            Product Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            value={formData.name}
            className={inputCssStyles}
          />

          {/* Product Price */}
          <label htmlFor="productPrice" className={labelCssStyles}>
            Product Price
          </label>
          <input
            type="number"
            name="price"
            placeholder="Product Price"
            onChange={handleChange}
            value={formData.price}
            className={inputCssStyles}
          />

          {/* Stock Quantitiy */}
          <label htmlFor="stockQuantity" className={labelCssStyles}>
            Stock Quantity
          </label>
          <input
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            onChange={handleChange}
            value={formData.stockQuantity}
            className={inputCssStyles}
          />

          {/* Rating */}
          <label htmlFor="rating" className={labelCssStyles}>
            Rating
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            onChange={handleChange}
            value={formData.rating}
            className={inputCssStyles}
          />

          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            Create
          </button>

          <button
            onClick={onClose}
            type="submit"
            className=" ml-2 py-2 px-4 bg-gray-500 text-white rounded-xl hover:bg-gray-600"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductModal;
