import { stores } from "@/utils/stores";

export const getStoreById = (id: number) => {
    return stores[id];
};
