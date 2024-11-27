"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

NewItem.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category) {
      alert("Please fill in both the item name and category.");
      return;
    }

    const newItem = {
      id: Math.random().toString(36).substring(2, 15), // Generate a unique ID
      name,
      quantity,
      category,
    };

    console.log("New item created:", newItem); // Debugging log

    onAddItem(newItem); // Trigger the parent callback to add the item
    setName(""); // Clear input fields
    setQuantity(1);
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item Name"
        required
        className="border p-2 rounded text-black" // Text color changed to black
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
        className="border p-2 rounded text-black" // Text color changed to black
      />
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold">{quantity}</span>
      </div>
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-black rounded" // Button text color changed to black
      >
        Add Item
      </button>
    </form>
  );
}
