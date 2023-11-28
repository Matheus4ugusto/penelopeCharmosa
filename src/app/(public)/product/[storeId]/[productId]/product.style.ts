import styled from "styled-components";

export const Display = styled.section`
  margin: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  #image {
    object-fit: cover;
    width: 400px;
    height: 400px;
    border-radius: 10px;
    @media (max-width: 375px) {
      width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const Data = styled.section`
  color: ${({theme}) => theme.colors.chocolate.primary};
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: flex-start;
  gap: 1rem;

  h1 {
    font-size: 2.5rem;
  }

  fieldset {
    border: none;
    @media (max-width: 425px) {
      display: flex;
      justify-content: center;
      gap: 1rem;
      legend {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 425px) {
    align-items: center;
  }

  button {
    font-size: 1.5rem;
    color: ${({theme}) => theme.colors.chocolate.primary};
    background-color: ${({theme}) => theme.colors.pink.primary};
    width: 20%;
    border-radius: 10px;
    @media (max-width: 1440px) {
      width: 30%;
    }
    @media (max-width: 1024px) {
      width: 45%;
    }
    @media (max-width: 768px) {
      width: 90%;
    }
    @media (max-width: 425px) {
      width: 110%;
    }

    &:hover {
      transition: all .2s;
      background-color: ${({theme}) => theme.colors.pink.secondary};
      transform: scale(1.01);
    }
  }
`;