import styled from 'styled-components'

export const HeaderStyled = styled.header `
  background-color: #B0DBDB;
  display: flex;
  justify-content: space-between;
  padding: 9px;
  
  p {
    margin-left: 30px
  }

  div {
    display: flex;
    margin-top: 5px;
    margin-right: 30px;
    p {
      margin: 10px;
    }
  }
`
export const AboutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
  margin-left: 30px;
  margin-right: 30px;

  img {
    border-radius: 50%;
    height: 200px;
    margin-top: 35px;
    width: 200px;
  }
  
  div {
    margin-left: 30px;
  }
`
export const Project = styled.div`
  background-color: #B0DBDB;
  
  .car {
    margin-left: 30px;
    
    div {
      display: flex;

      img {
        width: 60%;
      }

      p {
        margin-left: 15px;
      }

      .legend {
        background-color: white;
        color: black;
        width: 50%;
      }
    }
  }
`
