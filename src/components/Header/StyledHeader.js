import styled from 'styled-components';

export const StyledHeader = styled.header`
  grid-area: header;
  background: white;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 0.6rem 1rem;
  border-bottom: 1px rgba(103, 52, 148, 0.1) solid;
  h3 {
    margin: 0;
    a {
      color: black;
      text-decoration: none;
      small {
        color: grey;
        font-size: 0.7rem;
      }
    }
  }
`;
