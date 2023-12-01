import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  flex-grow: 1;
  //position: absolute;
  //bottom: 0;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.pink.primary};
  color: ${({theme}) => theme.colors.chocolate.primary};

  #aboutUs {
    width: 20%;
    text-align: justify;
    margin-left: 2rem;
    @media (max-width: 425px) {
      width: 70%;
      margin-left: 0;
    }
  }

  #socialMedia {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  width: 100%;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: relative;
  }
  
  @media(max-width: 768px){
    //position: relative;
  }
`;

export const Section = styled.section`
  h1 {
    text-align: center;
  }

  ul li a {
    color: ${({theme}) => theme.colors.chocolate.primary};
  }

  form {
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 425px) {
      padding-bottom: 1rem;
    }
  }

  form input {
    width: 80%;
    background-color: ${({theme}) => theme.colors.peachPuff.primary};
    border: none;
    outline: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 1%;

    &::placeholder {
      color: ${({theme}) => theme.colors.chocolate.primary};
    }
  }

  #submitButton {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    background-color: ${({theme}) => theme.colors.peachPuff.primary};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover {
      transition: all 0.3s;
      background-color: ${({theme}) => theme.colors.pink.secondary};
      transform: scale(1.1);
    }
  }
`;
