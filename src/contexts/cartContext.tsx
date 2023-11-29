import { createContext, ReactNode, useContext, useState } from "react";
import { CartContextProps } from "@/types/context";
import { ProductsProps } from "@/types/storeTypes";

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
    const [asideCart, setAsideCart] = useState<boolean>(false);

    const openAsideCart = () => {
        setAsideCart(true);
    };

    const closeAsideCart = () => {
        setAsideCart(false);
    };

    const addToCart = (values: ProductsProps) => {
        let handleBuy: ProductsProps[] = JSON.parse(localStorage.getItem("cart") || '[]');
        handleBuy.push(values);
        localStorage.setItem("cart", JSON.stringify(handleBuy));
        console.log(handleBuy)
    };

    const removeFromCart = (values: ProductsProps) => {
        let handleRemoveFromCart: ProductsProps[] = JSON.parse(localStorage.getItem("cart") || '[]');
        handleRemoveFromCart = handleRemoveFromCart.filter(item => item !== values);
        localStorage.setItem("cart", JSON.stringify(handleRemoveFromCart));
    };

    const clearCart = () => {
        localStorage.removeItem("cart");
    };

    /*const total = () => {
        localStorage.getItem("cart");
    }*/

    return (
        <CartContext.Provider value={{
            openAsideCart,
            closeAsideCart,
            addToCart,
            clearCart,
            asideCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
export const useCart = () => useContext(CartContext);