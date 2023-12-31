export interface ProductsProps {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    sizes: string;
    colors: string;
    storeId?: number;
}

export interface StoreProps {
    id: number;
    name: string;
    products: ProductsProps[];
    storeDescription: string;
}
