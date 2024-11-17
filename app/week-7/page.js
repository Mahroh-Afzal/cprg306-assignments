"use client";

import React, { useState, useEffect } from 'react';
import ItemList from './item-list';
import NewItem from './new_item';
import itemsData from './items.json';

export default function Page() {
    
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem('items');
        return savedItems ? JSON.parse(savedItems) : itemsData;
    }
    );

    // Add a new item + save it to storage
    const handleAddItem = (newItem) => {
        const updatedItems = [...items, newItem];
        setItems(updatedItems); 
        localStorage.setItem('items', JSON.stringify(updatedItems));
    };


    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    return (
        <main>
            <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: 'orange' }}>Shopping List</h1>
            
            {/* New item */}
            <NewItem onAddItem={handleAddItem} /> 

            {/* Item list */}
            <ItemList items={items} /> 
        </main>
    );
}
