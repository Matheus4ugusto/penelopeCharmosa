"use client";

import * as Styled from "./store.style";
import {ProductsProps} from "@/types/storeTypes";
import {getStoreById} from "@/services/store.service";
import ProductBox from "@/components/ProductBox";

interface StoreInterface {
    params: {
        id: number;
    };
}

export default function Store({params: {id}}: StoreInterface) {
    const store = getStoreById(id);
    return (
        <>
            <Styled.Title>{store.name}</Styled.Title>
            <Styled.Products>
                <h1 id="title">Produtos:</h1>
                <div id="div">
                    {store.products.map((product: ProductsProps) => (
                        <ProductBox key={product.id} {...product} />
                    ))}
                </div>
            </Styled.Products>
        </>
    );
}
