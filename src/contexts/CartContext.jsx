import { createContext, useState } from "react";


export const  CartContext = createContext({
    items: [],
    addItem: () => {},
    removeItem: () => {}
})


export function CartProvider ({children}) {

    const [ items, setItems ] = useState([]);

    const addItem = (item) => {
        setItems(prev => [...prev, item])
    };


    const removeItem = (id) => {
        setItems(prev => prev.filter(item => item.id !== id))
    };

    return (
    <CartContext.Provider value={{items, addItem, removeItem}}>
        {children}
    </CartContext.Provider>
    );

}