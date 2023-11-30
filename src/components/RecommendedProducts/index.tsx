import * as Styled from "./recommendedProducts.style";
import {StoreProps} from "@/types/storeTypes";
import Link from "next/link";
import React from "react";

//const number = randomProduct();
const number:number = 1

const RecommendedProducts: React.FC<StoreProps> = ({
                                                       id,
                                                       name,
                                                       products,
                                                       storeDescription,
                                                   }) => {
    return (
        <Styled.Div>
            <Link href={`/product/${id}/${number}`}>
                <Styled.Img src={products[number].image} alt={name}/>
            </Link>
            <Styled.Info>
                <Styled.Name>{products[number].name}</Styled.Name>
                <Styled.Description>{name}</Styled.Description>
            </Styled.Info>
        </Styled.Div>
    );
};

export default RecommendedProducts;
