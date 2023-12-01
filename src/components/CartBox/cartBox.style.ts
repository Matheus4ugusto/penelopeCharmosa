import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.colors.pink.secondary};
  height: 30rem;
  overflow-y: scroll;
  width: 80%;
  margin: 0 auto;
  margin-top: 3.5rem;
  border-radius: 10px;
  @media (max-width: 768px) {
    margin-top: 1.5rem;
    margin-bottom: 10rem;
  }
  @media(max-width: 1920px){
    margin-bottom: 8rem
  }
  @media(max-width: 1440px){
    margin-bottom: 14rem;
  }
  @media (max-width: 435px) {
    margin-bottom: 2rem;
    flex-direction: column;
  }
`

export const Div = styled.div`
  padding: 0 .5rem;
  //border-right: solid 1px black;
  color: ${({theme}) => theme.colors.chocolate.primary};
  width: 70%;
  @media (max-width: 1024px) {
    border-right: none;
    gap: 1rem;
  }
`

export const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme}) => theme.colors.chocolate.primary};
  width: 30%;
  @media (max-width: 425px) {
    width: 100%;
    border-top: solid black 1px;
  }

  button {
    background-color: ${({theme}) => theme.colors.pink.primary};
    color: ${({theme}) => theme.colors.chocolate.primary};
    width: 50%;
    height: 10%;
    border-radius: 10px;
    font-size: 1.5rem;
    margin-top: 1rem;
    font-weight: bold;
    @media (max-width: 1440px) {
      font-size: 1.3rem;
      height: 11.5%;
    }
    @media (max-width: 1024px) {
      width: 70%;
      height: 12%;
    }
    @media (max-width: 425px) {
      height: 40%;
      margin-bottom: 1rem;
    }
  }
`