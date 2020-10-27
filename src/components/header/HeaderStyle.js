import styled from 'styled-components';

export const StyledHeader = styled.header`
  grid-area: header;
  background: white;
  color: black;
  height: 100%;

  >div {
    padding: .6rem 1rem;
    text-align: center;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

export const StyledMenu = styled.menu`
  grid-area: header;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-row: 80px 1fr;
  border-bottom: 0.5px solid rebeccapurple;

  .container {
    display: inline-block;
    cursor: pointer;
  }
  
  .bar1, .bar2, .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }
  
  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }
  
  .change .bar2 {opacity: 0;}
  
  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;
