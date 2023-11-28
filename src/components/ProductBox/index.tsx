import {moneyFormat} from "@/utils/moneyFormat";
import * as Styled from "./productBox.style";
import {ProductsProps} from "@/types/storeTypes";
import Link from "next/link";
import React from "react";

const ProductBox: React.FC<ProductsProps> = ({
                                                 id,
                                                 name,
                                                 price,
                                                 image,
                                                 storeId
                                             }) => {
    return (
        <Styled.Box>
            <Link href={`/product/${storeId}/${id}`}>
                <Styled.Img src={image} alt={name}/>
            </Link>
            <h1>{name}</h1>
            <h1>{moneyFormat(price)}</h1>
        </Styled.Box>
    );
};
export default ProductBox;
