"use client";
import React from "react";
import Item from "./item";

export default function ItemList({ items }) {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((items) => (
          <Item key={items.id} {...items} />
        ))}
      </ul>
    </div>
  );
}
