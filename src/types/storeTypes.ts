export interface ProductsProps {
    id: number;
    name: string;
    price: number;
    image: string;
    sizes: string;
    colors: string;
    storeId: number;
    amount?: number;
}

export interface StoreProps {
    id: number;
    name: string;
    products: ProductsProps[];
    storeDescription: string;
}