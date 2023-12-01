import * as Styled from "./productDataInCart.style"
import React from "react";
import {ProductsProps} from "@/types/storeTypes";
import {moneyFormat} from "@/utils/moneyFormat";

const ProductDataInCart: React.FC<ProductsProps> = ({
                                                        id,
                                                        storeId,
                                                        colors,
                                                        image,
                                                        price,
                                                        name,
                                                        sizes
                                                    }) => {
    return (
        <Styled.Div>
            <h1>1x {name}</h1>
            <h2>{moneyFormat(price)}</h2>
            <h2>{sizes}</h2>
        </Styled.Div>
    )
}

export default ProductDataInCart