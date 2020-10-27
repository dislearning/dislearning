import styled from 'styled-components';

export const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    'header header'
    'main sidebar'
    'footer footer';
  height: 100vh;
  overflow: hidden;

  main {
    grid-area: main;
    padding: 1rem;
    overflow-y: auto;
  }
`;
