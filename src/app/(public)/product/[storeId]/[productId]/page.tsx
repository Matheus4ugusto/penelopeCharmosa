"use client";

import ProductSellBox from "@/components/ProductSellBox";
import {stores} from "@/utils/stores";

interface ProductInterface {
    params: {
        storeId: number;
        productId: number;
    };
}

//TODO adicionar função de adicionar ao carrinho
//TODO adicionar a função de selecionar quantidade de produtos
export default function ({
                             params: {storeId, productId},
                         }: ProductInterface) {
    const product = stores[storeId].products[productId];
    return(
        <ProductSellBox id={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        sizes={product.sizes}
                        colors={product.colors}
                        storeId={product.storeId}/>
    )
}
