import styled from 'styled-components'
const principalColor = '#06455d';

export const HeaderStyled = styled.header `
  color: ${principalColor};
  display: flex;
  margin-bottom:60px;
  margin-top:20px;

  h3 {
    color: ${principalColor};
    margin-right: 20px;
  }

  @media only screen and (max-width: 1300px) {
    h3 {
    color: white;
    margin-right: 20px;
    }
  }
`
