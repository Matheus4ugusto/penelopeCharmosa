import {createContext, ReactNode, useContext, useState} from "react";
import {CartContextProps} from "@/types/context";
import {ProductsProps} from "@/types/storeTypes";

export const CartContext = createContext<CartContextProps>({} as CartContextProps);
const CartContextProvider = ({children}: { children: ReactNode }) => {
    const [asideCart, setAsideCart] = useState<boolean>(false);

    const openAsideCart = () => {
        setAsideCart(true);
    };

    const closeAsideCart = () => {
        setAsideCart(false);
    };

    const addToCart = (values: ProductsProps) => {
        if (typeof window !== 'undefined') {
            let handleBuy: ProductsProps[] = JSON.parse(localStorage.getItem('cart') || '[]');

            // Verifica se o produto já está no carrinho
            if (!handleBuy.find(item => JSON.stringify(item) === JSON.stringify(values))) {
                handleBuy.push(values);
                localStorage.setItem('cart', JSON.stringify(handleBuy));
                console.log(JSON.parse(localStorage.getItem('cart') || '[]'));
            }
        }
    };

    const removeFromCart = (values: ProductsProps) => {
        if (typeof window !== 'undefined') {
            let handleRemoveFromCart: ProductsProps[] = JSON.parse(localStorage.getItem('cart') || '[]');
            handleRemoveFromCart = handleRemoveFromCart.filter(item => item !== values);
            localStorage.setItem('cart', JSON.stringify(handleRemoveFromCart));
        }
    };

    const clearCart = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem('cart');
            // Atualizar o estado do contexto, se necessário
        }
    };

    const total = () => {
        if (typeof window !== 'undefined') {
            let handleTotal;
            let handleValues = [];

            if (localStorage.getItem('cart') === null) {
                return 0; // Se o carrinho estiver vazio, o total é zero
            }

            handleTotal = JSON.parse(localStorage.getItem('cart') as string);

            let totalSum = 0;

            for (let i = 0; i < handleTotal.length; i++) {
                handleValues.push(handleTotal[i].price);
                totalSum += handleTotal[i].price;
            }

            return totalSum;
        }
    };

    const getProducts = () => {
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem("cart");
            let products: ProductsProps[] | null = null;
            if (storedCart) {
                products = JSON.parse(storedCart);
            }
            return products;
        }
    }
    return (
        <CartContext.Provider
            value={{
                openAsideCart,
                closeAsideCart,
                addToCart,
                clearCart,
                asideCart,
                removeFromCart,
                total,
                getProducts
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
export const useCart = () => useContext(CartContext);
