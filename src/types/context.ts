export interface CartContextProps {
    addToCart: () => void;
    removeFromCart: () => void;
    clearCart: () => void;
    openAsideCart: () => void;
    closeAsideCart: () => void;
    asideCart: boolean;
    getProducts: () => void;
    total: number
}