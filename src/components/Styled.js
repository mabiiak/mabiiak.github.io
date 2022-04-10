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
export const AboutStyled = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  .sub-titulo { text-align: end }
  .sub-titulo h1 { font-size: 38px }
  .sub-titulo p { margin-left: 80px }
  .sub-titulo img {
    height: 50px;
    margin-left: 10px;
    width: 50px;
  }

  img {
    border-radius: 10%;
    height: 250px;
    margin-bottom:40px;
    width: 250px;
  }
  
  @media only screen and (max-width: 1450px) {
    .sub-titulo h1 { font-size: 30px }
  }

  @media only screen and (max-width: 985px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  
    .sub-titulo {
      margin-left: 20px;
      margin-right: 20px;
      text-align: center;
    }
    .sub-titulo h1 { font-size: 30px }
    .sub-titulo p { margin-left: 0 }

    img {
      margin-left: auto;
      margin-right: auto;
      margin-top: 8px;
      height: 250px;
      width: 250px;
    }
  }
`
export const Project = styled.div`
  h1 {
    margin-left: 30px;
    text-align: left;
  }

  .car {
    margin-left: 30px;
    margin-right: 30px;
    
    div {
      display: flex;

      img {
        width: 50%;
      }

      .legenda {
        flex-direction: column;
        margin-left: 15px;
      }
    }
  }
`
