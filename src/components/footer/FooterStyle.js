import styled from 'styled-components';

const StyledFooter = styled.footer`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  border-top: 1px rgba(103, 52, 148, .1) solid;
  padding: .6rem 1rem;

  h3{
    margin: 0
  }
`;

export {
  StyledFooter
}