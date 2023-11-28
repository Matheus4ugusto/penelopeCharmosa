import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Almendra&family=Playfair+Display&family=Poppins&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
    font-family: 'Playfair Display', sans-serif;
}

body{
    min-height: 100vh;
    max-width: 100vw;
    background-color: #ffceb2 ;
}

button{
    cursor: pointer;
    background-color: transparent;
    border: none;
}
`;

export default GlobalStyles;
