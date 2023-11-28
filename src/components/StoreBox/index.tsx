import {StoreProps} from "@/types/storeTypes";
import * as Styled from "./storeBox.style";
import React from "react";

const StoreBox: React.FC<StoreProps> = ({id, name}) => {
    return (
        <Styled.Box>
            <a href={`store/${id}`}>
                <h1>{name}</h1>
            </a>
        </Styled.Box>
    );
};

export default StoreBox;
