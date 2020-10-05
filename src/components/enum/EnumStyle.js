import styled from 'styled-components';

const StyledEnum = styled.div`
  display: flex;
  align-items: center;
`;

const StyledItems = styled.ul`
  display: inline-block;
  list-style: none;
  margin: 0;

  li {
    display: inline-block;
    margin: 0 .2rem 0 0;
  }
`;

export {
  StyledEnum,
  StyledItems
};
