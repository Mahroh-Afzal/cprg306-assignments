
import Item from "./item"
export default function ItemList(){


    const items = [
        {name: "Milk, - 4 L 🥛",
        quantity: 1,
        category: "Dairy",
      },
       
      {
        name: "Bread 🍞",
        quantity: 2,
        category: "Bakery",
      },
       
        {
        name: "Eggs, - Dozen 🥚",
        quantity: 2,
        category: "Dairy",
      },
       
      {
        name: "Bananas 🍌",
        quantity: 6,
        category: "Produce",
      },
       
      {
        name: "Broccoli 🥦",
        quantity: 3,
        category: "Produce",
      },
       
     {
        name: "Chicken Breasts, - 1 kg 🍗",
        quantity: 1,
        category: "Meat",
      },
       
      {
        name: "Pasta Sauce 🍝",
        quantity: 3,
        category: "Canned Goods",
      },
       
     {
        name: "Spaghetti, - 454 g 🍝",
        quantity: 2,
        category: "Dry Goods",
      },
       
      {
        name: "Toilet Paper, - 12 pack 🧻",
        quantity: 1,
        category: "Household",
      },
       
      {
        name: "Paper Towels, - 6 pack",
        quantity: 1,
        category: "Household",
      },
       
     {
        name: "Dish Soap 🍽️",
        quantity: 1,
        category: "Household",
      },
       
     {
        name: "Hand Soap 🧼",
        quantity: 4,
        category: "Household",
      },
    ];

    return (
        <ul className="space-y-4">
        {items.map((item, index) => (
            <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            />
    ))}
            </ul>
    );
        };
        
   