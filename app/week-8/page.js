"use client";
import React, { useState } from "react";
import ItemList from "./item-list"; 
import NewItem from "./new_item"; 

export default function App() {
  const [items, setItems] = useState([
    { id: "1", name: "Bananas", quantity: 6, category: "Produce" },
    { id: "2", name: "Bread", quantity: 2, category: "Bakery" },
    { id: "3", name: "Broccoli", quantity: 3, category: "Produce" },
  ]);

  // Add a new item to the list
  const handleAddItem = (newItem) => {
    console.log("Adding new item:", newItem); // Debugging log
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-center mb-8">Shopping List App</h1>

      {/* Add New Item */}
      <NewItem onAddItem={handleAddItem} />

      {/* Display Items */}
      <ItemList items={items} />
    </div>
  );
}
