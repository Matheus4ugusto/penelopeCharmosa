import {stores} from "@/utils/stores";

export const getProductById = (storeId: number, productId: number) => {
    return stores[storeId].products[productId]
}