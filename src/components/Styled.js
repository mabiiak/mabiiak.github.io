import styled from 'styled-components'

const color = '#8dc6d9' ;
const alignInitial = {
  'margin-left': '30px',
}

export const HeaderStyled = styled.header `
  background-color: ${color};
  color: white;
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

  @media only screen and (max-width: 450px) {
    .name {
      font-size: 25px;
      margin-top: 12px;
      text-align: left;

    }

    p {
      margin-left: 10px;
    }

    div {
      flex-direction: column;
      margin-right: 0;
      margin-top: 11px;

      p {
        margin: 5px;
        margin-right: 10px;
        text-align: right;
      }
    }
  }
`
export const AboutStyled = styled.div`
  background-color: ${color};
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
  img {
    border-radius: 50%;
    height: 200px;
    margin-bottom: 30px;
    margin-left: 30px;
    margin-top: 35px;
    width: 200px;
  }
  
  div {
    margin-bottom: 60px;
    margin-left: 30px;
    margin-right: 30px;
  }

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  
    img {
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
  }
  }
`
export const Project = styled.div`
  color: ${color};

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

export const FormStyles = styled.div`
  background-color: ${color};

  h1 {
    padding-top: 30px;
    text-align: left;
    ${alignInitial}
  }

  form {
    ${alignInitial}
    display: flex;
    flex-direction: column;
    width: 50%;

    input , textarea {
      border: none;
      border-radius: 3px;
      margin-bottom: 5px;
    }

    button {
      background-color: #FFE09C;
      border: none;
      border-radius: 3px;
      padding: 10px;
    }
  }
`
