import styled from 'styled-components'
const principalColor = '#06455d';

export const Project = styled.div`
  justify-content: space-between;

  h2 { color: ${principalColor}}
  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media only screen and (max-width: 1050px) {
    
    div {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      margin-right: auto;
      margin-left: auto;
    }
  }
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
  width: 297px;

  div {
    align-items: center;
    background-color: white;
    flex-direction: column;
    border-radius: 5px;
    display: block;
    text-align: center;
    line-height: 10px;
    width: 297px;
  }

  span {
    display:flex;
    background-color: white;
    margin-left:auto;
    margin-right:auto;
    padding-bottom:5px;
  }
  @media only screen and (max-width: 1050px) {
    height: 430px;
    width: 450px;

    div { width: 650px }
  }

  @media only screen and (max-width: 600px) {
    height: 330px;
    width: 350px;

    div { width: 350px }
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
  height: 165px;
  width: 297px;

  @media only screen and (max-width: 1050px) {
    height: 310px;
    width: 450px;
  }

  @media only screen and (max-width: 600px) {
    height: 210px;
    width: 350px;
  }
`