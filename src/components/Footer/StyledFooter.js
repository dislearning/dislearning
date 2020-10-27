import styled from 'styled-components';

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  border-top: 1px rgba(103, 52, 148, 0.1) solid;
  padding: 0.6rem 1rem;

  h3 {
    margin: 0;
    small {
      color: lightgrey;
      font-size: 0.7rem;
    }
  }
`;
