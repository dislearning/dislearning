import styled from 'styled-components';

const StyledCourse = styled.div`
  display: inline-grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr auto;

  img {
    margin: 0;
  }
`;

const StyledTitle = styled.div`
  padding: .6rem 1rem;
  border: 2px rgba(103, 52, 148, .1) solid;
  border-top: none;

  a {
    color: black;
    text-decoration: none;

    h3 {
      margin: 0;
    }
  }
`;

export {
  StyledCourse,
  StyledTitle
};
