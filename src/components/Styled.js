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
export const TextAbout = styled.div`
  margin-bottom: 60px;
  h2 { color: ${principalColor}}
`
export const Project = styled.div`
/* align-items: center; */
  h2 { color: ${principalColor}}

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  justify-content: space-between;
`
export const Card = styled.div`
  align-items: end;
  display: flex;
  background-color:white;
  border-radius: 10px;
  box-shadow: -5px 15px 5px grey ;
  flex-direction: row;
  height: 320px;
  margin-bottom: 60px;
  margin-right: 20px;
  padding-bottom:5px;
  width: 300px;

  div {
    align-items: center;
    background-color: white;
    flex-direction: column;
    border-radius: 5px;
    display: block;
    text-align: center;
    line-height: 10px;
    width: 300px;
  }

  span {
    display:flex;
    background-color: white;
    margin-left:auto;
    margin-right:auto;
    padding-bottom:5px;
  }

`

export const Link = styled.a`
    align-items: center;
    background-color: ${principalColor};
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    margin-left:10px;
    margin-right: 10px;
    height: 40px;
    text-decoration:none;
    width: 80px;
`
export const Image = styled.img`
  border-radius: 10px 10px 0px 0px;
  height: 200px;
  width: 300px;

`
