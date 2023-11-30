import styled from "styled-components";

export const RecommendedDisplay = styled.section`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  margin: 1rem 1rem;
  font-size: 2rem;
  color: ${({theme}) => theme.colors.chocolate.primary};
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  @media (max-width: 1024px) {
    overflow-x: scroll;
    flex-wrap: nowrap;
    gap: 2rem;
    margin: 0 2rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media (max-width: 768px) {
    margin: 0 0.5rem;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    overflow-x: hidden;
  }
`;

export const StoresDisplay = styled.section`
  h1 {
    margin: 3rem 1rem 0 1rem;
    font-size: 2rem;
    color: ${({theme}) => theme.colors.chocolate.primary};
  }

  display: flex;
  flex-direction: column;
  margin-bottom: 3.5rem;

  section {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  flex-grow: 1;
  
`;
