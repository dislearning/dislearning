import styled from 'styled-components';

export const StyledMenuButton = styled.div`
  display: inline-block;
  cursor: pointer;

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.4s;
  }

  ${({ active }) =>
    active &&
    `
    .bar1 {
      transform: rotate(-45deg) translate(-9px, 6px);
    }
    .bar2 {
      opacity: 0;
    }
    .bar3 {
      transform: rotate(45deg) translate(-8px, -8px);
    }
  `}
`;
