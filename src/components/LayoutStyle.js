import styled from 'styled-components';

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas: 
    "header header"
    "sidebar main"
    "footer footer";
  height: 100vh;
  overflow: hidden;
`;

const StyledMain = styled.div`
  grid-area: main;
  padding: 1rem;
  overflow-y: auto;
`;

export {
  StyledLayout,
  StyledMain
}