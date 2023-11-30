import React, {useEffect, useState} from 'react'; // Importe useState
import * as Styled from './cartBox.style';
import {useCart} from '@/contexts/cartContext';
import {ProductsProps} from '@/types/storeTypes';
import ProductDataInCart from '@/components/ProductDataInCart';
import {moneyFormat} from '@/utils/moneyFormat';

const CartBox: React.FC = () => {
    const {total, clearCart} = useCart();
    const [products, setProducts] = useState<ProductsProps[] | null>(null); // Use useState para definir o estado de 'products'
    const handleTotal = total();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                setProducts(JSON.parse(storedCart)); // Atualize o estado usando setProducts
            }
        }
    }, []); // O array de dependências vazio garante que esse efeito seja executado apenas uma vez após a renderização inicial

    console.log(products);

    return (
        <Styled.Box>
            <Styled.Div>
                {products ?
                    products.map((item: ProductsProps) => (
                        <ProductDataInCart
                            id={item.id}
                            name={item.name}
                            price={item.price}
                            image={item.image}
                            sizes={item.sizes}
                            colors={item.colors}
                            storeId={item.storeId}
                            key={item.name + item.sizes}
                        />
                    )) : <h1>O carrinho está vazio!</h1>}
            </Styled.Div>
            <Styled.PriceDiv>
                <h1>{`Total: ${moneyFormat(handleTotal)}`}</h1>
                <button disabled={true}>Finalizar Compra</button>
                <button onClick={clearCart}>Limpar o Carrinho</button>
            </Styled.PriceDiv>
        </Styled.Box>
    );
};

export default CartBox;
