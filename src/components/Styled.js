import styled from 'styled-components'
// import starWars from '../images/starwarsPlanets.png';
// import wallet from '../images/trybewalet.png';
import trybetunes from '../images/trybetunes.png';
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
  /* align-items: center; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`
export const CardProject = styled.div`
  align-items: center;
  display: flex;
  background-image:  url(${trybetunes});
  background-size: cover;
  border-radius: 10px;
  box-shadow: 5px 15px 10px grey ;
  flex-direction: column;
  height: 300px;
  justify-content: end;
  margin-bottom: 60px;
  margin-right: 20px;
  text-align: center;
  width: 240px;

  button {
    border-radius: 10px ;
    height: 50px;
    width: 50px;
  }

  div {
    background-color: white;
    border-radius: 5px;
    line-height: 10px;
    width: 240px;
  }
`
export const Botao = styled.button`
  display: none;
  ${CardProject}:hover & {
    display: block;
  }
`
