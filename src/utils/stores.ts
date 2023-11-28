import {StoreProps} from "@/types/storeTypes";

export const stores: StoreProps[] = [
    {
        id: 0,
        name: "Loja 01",
        products: [
            {
                id: 0,
                name: "Moletom Saint Paradiso",
                price: 150,
                image: "/productsImgs/moletomSaintParadiso.jpg",
                category: "Camisetas",
                sizes: "M",
                colors: "Azul, Vermelho, Branco",
                storeId: 0,
            },
            {
                id: 1,
                name: "Conjunto Blusa e Casaco de lã",
                price: 120,
                image: "/productsImgs/conjuntoBlusaCasacoLa.jpg",
                category: "Calças",
                sizes: "P, M, G",
                colors: "Azul, Preto",
                storeId: 0,
            },
            {
                id: 2,
                name: "Blusa Cropped Estilo Retrô",
                price: 160,
                image: "/productsImgs/blusaCropped.jpg",
                category: "Calçados",
                sizes: "40, 41, 42",
                colors: "Branco, Preto",
                storeId: 0,
            },
            {
                id: 3,
                name: "Blusa em Listras estilo Retrô",
                price: 180,
                image: "/productsImgs/blusaListras.jpg",
                category: "Acessórios",
                sizes: "Único",
                colors: "Prata, Dourado",
                storeId: 0,
            },
        ],
        storeDescription: "Loja 01",
    },
    {
        id: 1,
        name: "Loja 02",
        products: [
            {
                id: 0,
                name: "Vestido",
                price: 180,
                image: "/productsImgs/vestido.jpg",
                category: "Calças",
                sizes: "P,M,G",
                colors: "Azul, Preto",
                storeId: 1,
            },
            {
                id: 1,
                name: "Top Florido",
                price: 100,
                image: "/productsImgs/topFlorido.jpg",
                category: "Calçados",
                sizes: "40,41,42",
                colors: "Branco, Preto",
                storeId: 1,
            },
            {
                id: 2,
                name: "Casaco de Lã",
                price: 240,
                image: "/productsImgs/casacoLa.jpg",
                category: "Casacos",
                sizes: "P,M,G",
                colors: "Preto, Marrom",
                storeId: 1,
            },
            {
                id: 3,
                name: "Saia",
                price: 70,
                image: "/productsImgs/saia.jpg",
                category: "Acessórios",
                sizes: "Único",
                colors: "Preto, Marrom",
                storeId: 1,
            },
        ],
        storeDescription: "Loja 02",
    },
    {
        id: 2,
        name: "Loja 03",
        products: [
            {
                id: 0,
                name: "Bore",
                price: 150,
                image: "/productsImgs/bore.jpg",
                category: "Vestidos",
                sizes: "P,M,G",
                colors: "Azul, Vermelho",
                storeId: 2,
            },
            {
                id: 1,
                name: "Calça",
                price: 120,
                image: "/productsImgs/calca.jpg",
                category: "Calçados",
                sizes: "36,37,38",
                colors: "Preto, Bege",
                storeId: 2,
            },
            {
                id: 2,
                name: "Blusa Cropped Missguied",
                price: 100,
                image: "/productsImgs/blusaCroppedMissguied.jpg",
                category: "Acessórios",
                sizes: "Único",
                colors: "Marrom, Preto",
                storeId: 2,
            },
            {
                id: 3,
                name: "Top Branco",
                price: 90,
                image: "/productsImgs/topBranco.jpg",
                category: "Blusas",
                sizes: "P, M, G",
                colors: "Azul, Branco, Vermelho",
                storeId: 2,
            },
        ],
        storeDescription: "Loja 03",
    },
    {
        id: 3,
        name: "Loja 04",
        products: [
            {
                id: 0,
                name: "Moletom Los Angeles",
                price: 60,
                image: "/productsImgs/moletomLosAngeles.jpg",
                category: "Roupas de Verão",
                sizes: "P,M,G",
                colors: "Azul, Vermelho, Branco",
                storeId: 3,
            },
            {
                id: 1,
                name: "T-shirt Chihiro",
                price: 30,
                image: "/productsImgs/TShirtChihiro.jpg",
                category: "Acessórios",
                sizes: "Único",
                colors: "Preto, Azul, Vermelho",
                storeId: 3,
            },
            {
                id: 2,
                name: "Camiseta Star Wars",
                price: 90,
                image: "/productsImgs/blusaStarWars.jpg",
                category: "Camisas",
                sizes: "P,M,G",
                colors: "Azul, Branco, Preto",
                storeId: 3,
            },
            {
                id: 3,
                name: "T-shirt Vincent Van Gogh",
                price: 70,
                image: "/productsImgs/TShirtVincentVanGogh.jpg",
                category: "Roupas de Verão",
                sizes: "P,M,G",
                colors: "Azul, Preto",
                storeId: 3,
            },
        ],
        storeDescription: "Loja 04",
    },
];

