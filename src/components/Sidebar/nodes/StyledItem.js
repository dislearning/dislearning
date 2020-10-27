import styled from 'styled-components';

export const StyledItem = styled.div`
  padding: 0.7rem 1rem;
  display: grid;
  grid-template-columns: 28px 1fr;
  align-items: center;
  cursor: pointer;
  border-bottom: 1px rgba(103, 52, 148, 0.1) solid;
  background: white;
  ${({ bg }) => bg && `background: ${bg};`}
  ${({ selected }) =>
    selected &&
    `
    background: #ffffcc;
    cursor: inherit;
  `}
`;
