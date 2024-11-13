
"use client"; 

import Item from "./new_item";
export default function Page(){


return (
 <Item/> 

    );

}
const NewItem = () => { 
    const [item, setItem] = useState (''); 

    const handleSubmit = (e) => { 
        e.preventDefault (); 
        console.log('New item submitted:', item)
    }; 

};
