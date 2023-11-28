import styled from "styled-components";

export const Box = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media(max-width: 1024px){
    width: 442px;
  }
  @media(max-width: 375px){
    h1{
      width: 300px;
      text-align: center;;
    }
  }
`;

export const Img = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;
