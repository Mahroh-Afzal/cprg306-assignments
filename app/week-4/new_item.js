"use client"; 
import {useState} from "react"; 

const NewItem = () => {

    const [quantity, setQuantity] = useState(() => 1);

const increment =() => { 
    if (quantity <20) { 
        setQuantity(prevQuantity => prevQuantity +1); 
        }



}; 

const decrement =() => { 
     if (quantity >1) 
        setQuantity(prevQuantity => prevQuantity -1); 
        
}; 


return (
    <><div className="flex items-center space-x-4 justify-center"> 
   
        <button
            onClick={decrement}
            disabled={quantity === 1}
            className="px-2 py-1 bg-purple-400 rounded disabled:bg-gray-600">
            -
        </button>

        <span className="text-lg font-bold">{quantity}</span>

        <button
            onClick={increment}
            disabled={quantity === 20}
            className="px-2 py-1 bg-purple-400 rounded disabled:bg-orange-200">
            +
        </button>
    </div>
    </>


);
}
export default NewItem

