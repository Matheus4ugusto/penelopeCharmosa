"use client";

import * as Styled from "./home.style";
import RecommendedProducts from "@/components/RecommendedProducts";
import StoreBox from "@/components/StoreBox";
import { StoreProps } from "@/types/storeTypes";
import { stores } from "@/utils/stores";

export default function Home() {
    return (
        <>
            <Styled.RecommendedDisplay>
                <Styled.H1>Recomendados para você:</Styled.H1>
                <Styled.Div>
                    {stores.map((store: StoreProps) => (
                        <RecommendedProducts key={store.id} {...store} />
                    ))}
                </Styled.Div>
            </Styled.RecommendedDisplay>
            <Styled.StoresDisplay>
                <h1>Lojas: </h1>
                <section>
                    {stores.map((store: StoreProps) => (
                        <StoreBox key={store.id} {...store} />
                    ))}
                </section>
            </Styled.StoresDisplay>
        </>
    );
}
