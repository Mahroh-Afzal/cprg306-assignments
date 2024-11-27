"use client";
import React from "react";

export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-purple-500 mb-4 rounded shadow text-center p-4">
      <h2 className="text-xl font-bold text-green-500">{name}</h2>
      <p>
        {quantity} <span className="text-sm text-blue-500">in</span> {category}
      </p>
    </li>
  );
}
