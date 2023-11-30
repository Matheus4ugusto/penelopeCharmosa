import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.chocolate.primary};
`;

export const Products = styled.section`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  h1 {
    color: ${({ theme }) => theme.colors.chocolate.primary};
    font-size: 2rem;
    padding: 0.5rem;
    @media (max-width: 1024px) {
      #title {
        height: 30px;
      }
    }
  }
  #div {
    width: 100%;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    @media (max-width: 1024px) {
      overflow-x: scroll;
      flex-wrap: nowrap;
      gap: 2rem;
      padding: 0 1rem 0 20rem;
    }
    @media (max-width: 768px) {
      padding: 0 1rem 0 35rem;
    }
    @media (max-width: 425px) {
      flex-direction: column;
      padding: 0;
      align-items: center;
      overflow: hidden;
    }
  }
  flex-grow: 1;
  overflow: hidden;
  
`;
