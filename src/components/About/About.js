import React from 'react';
import icone from '../../images/icone.png'
import { AboutStyled } from '../Styled'

export default function About() {
  return (
    <AboutStyled>
      <div className='azul'>
        <p> a </p>
      </div>
      <img
        alt="Mabiane"
        src={ icone }
      />
      <div>
        <h1>Sobre mim:</h1>
        <p>
          Meu nome é Mabiane, moro em Curitiba.
          Já trabalhei com atendimento ao cliente e vendas, e com isso descobri que eu gosto de ajudar outras pessoas. <br/><br/>

          Atualmente sou Desenvolvedora Fron-End e estudo Desenvolvimento Web na Trybe.
        </p>
      </div>
      
    </AboutStyled>
  )
}
