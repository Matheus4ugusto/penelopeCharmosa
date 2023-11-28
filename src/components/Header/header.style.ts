import { styled } from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.pink.primary};
  display: flex;
  flex-direction: column;
  #inferiorDiv {
    margin: 0 auto;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.chocolate.primary};
    @media(max-width: 425px){
      text-align: center;
    }
  }
  #superiorDiv {
    padding-top: 0.5rem;
    display: flex;
    gap: 1.1rem;
    align-items: center;
  }
`;

export const Logo = styled.button`
  margin-left: 1rem;
`;

export const Span = styled.span`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.chocolate.primary};
`;
