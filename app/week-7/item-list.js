"use client";
import React, { useState } from 'react';
import Item from './item';

export default function ItemList({ items: initialItems }) {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);
  const [items, setItems] = useState(initialItems);

  const onIncrease = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  const onDecrease = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setItems(updatedItems);
  };

  // Sorting items based on their attributes
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  // Grouping items by category
  const groupedItems = groupByCategory
    ? sortedItems.reduce((groups, item) => {
        const category = item.category;
        if (!groups[category]) groups[category] = [];
        groups[category].push(item);
        return groups;
      }, {})
    : { All: sortedItems };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '10px',
          marginBottom: '1rem',
        }}
      >
        {/* Sort by Name */}
        <div style={{ flex: 1 }}>
          <button
            onClick={() => {
              setGroupByCategory(false);
              setSortBy('name');
            }}
            style={{
              backgroundColor: sortBy === 'name' && !groupByCategory ? '#ccc' : '#fff',
              padding: '0.5rem 1rem',
              width: '100%',
            }}
          >
            <h1 className="text-sm text-center font-semibold text-blue-500 mb-3">
              Sort by Name
            </h1>
          </button>
          {sortBy === 'name' && !groupByCategory && (
            <div style={{ padding: '0.5rem 1rem', width: '100%' }}>
              <ul>
                {sortedItems.map((item) => (
                  <Item
                    key={item.id}
                    {...item}
                    onIncrease={() => onIncrease(item.id)}
                    onDecrease={() => onDecrease(item.id)}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>


        <div style={{ flex: 1 }}>
          <button
            onClick={() => {
              setGroupByCategory(false);
              setSortBy('category');
            }}
            style={{
              backgroundColor: sortBy === 'category' && !groupByCategory ? '#ccc' : '#fff',
              padding: '0.5rem 1rem',
              width: '100%',
            }}
          >
            <h1 className="text-sm text-center font-semibold text-blue-500 mb-3">
              Sort by Category
            </h1>
          </button>
          {sortBy === 'category' && !groupByCategory && (
            <div style={{ padding: '0.5rem 1rem', width: '100%' }}>
              <ul>
                {sortedItems.map((item) => (
                  <Item
                    key={item.id}
                    {...item}
                    onIncrease={() => onIncrease(item.id)}
                    onDecrease={() => onDecrease(item.id)}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>

       
        <div style={{ flex: 1 }}>
          <button
            onClick={() => setGroupByCategory(true)}
            style={{
              backgroundColor: groupByCategory ? '#ccc' : '#fff',
              padding: '0.5rem 1rem',
              width: '100%',
            }}
          >
            <h1 className="text-sm text-center font-semibold text-blue-500 mb-3">
              Sort by Group
            </h1>
          </button>
          {groupByCategory && (
            <div style={{ padding: '0.5rem 1rem', width: '100%' }}>
              <ul>
                {Object.entries(groupedItems).map(([category, items]) => (
                  <div key={category}>
                    <h3>{category}</h3>
                    {items.map((item) => (
                      <Item
                        key={item.id}
                        {...item}
                        onIncrease={() => onIncrease(item.id)}
                        onDecrease={() => onDecrease(item.id)}
                      />
                    ))}
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
