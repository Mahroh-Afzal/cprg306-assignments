"use client";
import React from 'react';
export default function Item({ name, quantity, category }) {
  return(
    <main>
        <li className="p-4 bg-gray-200 mb-4 rounded shadow w-1/2">,
           <div> 
            <h2 className=" block text-xl font-bold text-green-500">{name}</h2>
           </div>
    
           <div> 
            <p className=" block text-sm text-black">
                {quantity} <span className="text-sm text-blue-500 font-bold"> in </span> {category}
            </p>
         </div>
        </li>
    </main>
        );
}