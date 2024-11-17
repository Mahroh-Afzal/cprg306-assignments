"use client"; 
import { useState } from "react"; 
import PropTypes from 'prop-types';

NewItem.propTypes = {
    onAddItem: PropTypes.func.isRequired,
};

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);  
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Math.random().toString(36).substring(2, 15), 
            name,
            quantity,  
            category,
        };

    
        if (onAddItem) {
            onAddItem(newItem);
        }

        
        setName('');
        setQuantity(1);  
        setCategory('');
    };

    const increment = () => {
        if (quantity < 20) {
            setQuantity(prevQuantity => prevQuantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Item Name"
                required
                className="border p-2 rounded"
            />
            <label className="sr-only" htmlFor="itemName">Item Name</label>
            <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="Category"
                required
                className="border p-2 rounded"
            />
            <div className="flex items-center space-x-4">
                <button
                    onClick={decrement}
                    disabled={quantity === 1}
                    type="button"
                    className="px-2 py-1 bg-purple-400 rounded disabled:bg-gray-600"
                >
                    -
                </button>
                <span className="text-lg font-bold">{quantity}</span>
                <button
                    onClick={increment}
                    disabled={quantity === 20}
                    type="button"
                    className="px-2 py-1 bg-purple-400 rounded disabled:bg-orange-200"
                >
                    +
                </button>
            </div>
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Add Item
            </button>
        </form>
    );
}
