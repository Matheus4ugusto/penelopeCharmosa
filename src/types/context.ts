import {ProductsProps} from "@/types/storeTypes";

export interface CartContextProps {
    addToCart: (values: ProductsProps) => void;
    removeFromCart: (values: ProductsProps) => void;
    clearCart: () => void;
    openAsideCart: () => void;
    closeAsideCart: () => void;
    asideCart: boolean;
    total: Function;
}