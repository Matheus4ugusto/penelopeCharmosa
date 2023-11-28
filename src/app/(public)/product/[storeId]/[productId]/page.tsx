"use client";

import * as Styled from "./product.style";
import Image from "next/image";
import {stores} from "@/utils/stores";
import {moneyFormat} from "@/utils/moneyFormat";

interface ProductInterface {
    params: {
        storeId: number;
        productId: number;
    };
}

//TODO adicionar a opção de selecionar o tamanho usando inputs do tipo radio
//TODO adicionar função de adicionar ao carrinho
//TODO adicionar a função de selecionar quantidade de produtos
export default function Product({
                                    params: {storeId, productId},
                                }: ProductInterface) {
    const product = stores[storeId].products[productId];
    const sizes = product.sizes.split(",");
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
                        <>
                            <div key={`div${i}`}>
                                <input
                                    type="radio"
                                    id={i ? "i1" : i}
                                    name="i"
                                    value="i"
                                    key={`input${i ? "i1" : i}`}
                                />
                                <label htmlFor="huey" key={`label${i}`}>
                                    {i}
                                </label>
                            </div>
                        </>
                    ))}
                </fieldset>
                <button>Adicionar ao Carrinho</button>
            </Styled.Data>
        </Styled.Display>
    );
}
