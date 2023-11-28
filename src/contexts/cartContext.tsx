import {createContext, ReactNode, useState} from "react";
import {CartContextProps} from "@/types/context";

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

const AuthContextProvider = ({children}: {children: ReactNode}) => {
    const [asideCart, setAsideCart] = useState<boolean>(false)
}