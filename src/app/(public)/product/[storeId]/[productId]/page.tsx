"use client";

import * as Styled from "./product.style";
import Image from "next/image";
import {stores} from "@/utils/stores";
import {moneyFormat} from "@/utils/moneyFormat";
import {useState} from "react";

interface ProductInterface {
    params: {
        storeId: number;
        productId: number;
    };
}

//TODO adicionar função de adicionar ao carrinho
//TODO adicionar a função de selecionar quantidade de produtos
export default function Product({
                                    params: {storeId, productId},
                                }: ProductInterface) {
    const product = stores[storeId].products[productId];
    const sizes = product.sizes.split(",");
    const [size, setSize] = useState("");
    console.log(size)
    return (
        <Styled.Display>
            <Image
                src={product.image}
                alt="{stores}"
                width={200}
                height={200}
                id="image"
            />
            <Styled.Data>
                <h1>{product.name}</h1>
                <h2>Preço: {moneyFormat(product.price)}</h2>
                <fieldset>
                    <legend>Tamanhos disponíveis:</legend>
                    {sizes.map((i) => (
                            <div key={i}>
                                <input
                                    type="radio"
                                    id={i}
                                    name="i"
                                    value={i}
                                    onChange={(event) => setSize(event.target.value)}
                                />
                                <label htmlFor={i}>
                                    {i}
                                </label>
                            </div>
                    ))}
                </fieldset>
                <button>Adicionar ao Carrinho</button>
            </Styled.Data>
        </Styled.Display>
    );
}
