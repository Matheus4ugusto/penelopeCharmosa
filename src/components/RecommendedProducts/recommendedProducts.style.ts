import styled from "styled-components";

export const Div = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 425px) {
    width: 80%;
  }
  @media (max-width: 1024px) {
    width: 480px;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  border-radius: 50%;
  width: 300px;
  height: 300px;
`;

export const Info = styled.section`
  text-align: center;
`;

export const Name = styled.span`
  color: ${({theme}) => theme.colors.chocolate.primary}
`;

export const Description = styled.p`
  color: ${({theme}) => theme.colors.chocolate.primary}`;
