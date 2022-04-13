import React from 'react';
import icone from '../images/icone.png'
import { AboutStyled, TextAbout } from './Styled'
import linkedin  from '../images/social/linkedin.png'
import github from '../images/social/github.png'

export default function About() {
  return (
    <div>
      <AboutStyled>
        <img
          alt="Mabiane"
          src={ icone }
        />
        <div className='sub-titulo'>
          <h1>Mabiane Polniak</h1>
          <p>Desenvolvedora Front-End</p>
          
          <a href="https://github.com/mabiiak/" rel="noopener noreferrer" target="_blank">
            <img alt="logo linkedin"  src={github}/>
          </a>
          <a href="https://www.linkedin.com/in/mabianepolniak/" rel="noopener noreferrer" target="_blank">
            <img alt="logo linkedin" src={linkedin}/>
          </a>
        </div>
      </AboutStyled>
      <TextAbout>
        <h2>Sobre mim</h2>
        <p>
            Meu nome é Mabiane, moro em Curitiba.
            Já trabalhei com atendimento ao cliente e vendas, e com isso descobri que eu gosto de ajudar outras pessoas. <br/><br/>

            Atualmente sou Desenvolvedora Fron-End e estudo Desenvolvimento Web na Trybe.
          </p>
      </TextAbout>
    </div>
  )
}
