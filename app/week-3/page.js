
import ItemList from "./item-list";
import Item from "./item";
export default function Page(){



    return(
        <main className="bg-gray-300 p-8 min-h-screen">
            <h1 className="text-4xl font-bold text-blue-500 mb-6"> Shopping List</h1>
            <ItemList /> 
    
        </main>
    );

    }