import * as Styled from "./productSellBox.style"
import {ProductsProps} from "@/types/storeTypes";
import Image from "next/image";
import {moneyFormat} from "@/utils/moneyFormat";
import {getProductById} from "@/services/product.service";
import {MouseEventHandler, useState} from "react";
import {useCart} from "@/contexts/cartContext";


interface ProductInterface {
    params: {
        storeId: number;
        productId: number;
    };
}

const ProductSellBox:React.FC<ProductsProps> = ({
    id,
    name,
    price,
    image,
    sizes,
    colors,
    storeId,
    amount,
}) => {
    const product = getProductById(storeId, id);
    const sizes1 = product.sizes.split(",");
    const [size, setSize] = useState("");
    const {addToCart, total} = useCart();
    const handleClick: MouseEventHandler<HTMLButtonElement> = () =>{
        if(size === ""){
            return
        }
        addToCart({...product, sizes: size})
    }

    return(
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
                    {sizes1.map((i) => (
                        <div key={i}>
                            <input
                                type="radio"
                                id={i}
                                name="i"
                                value={i}
                                required={true}
                                onChange={(event) => setSize(event.target.value)}
                            />
                            <label htmlFor={i}>
                                {i}
                            </label>
                        </div>
                    ))}
                </fieldset>
                <button onClick={handleClick}>Adicionar ao Carrinho</button>
            </Styled.Data>
        </Styled.Display>
    )
}

export default ProductSellBox;
