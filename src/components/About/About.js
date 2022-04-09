import React from 'react';
import icone from '../../images/icone.png'
import { AboutStyled } from '../Styled'
import linkedin  from '../../images/linkedin-logo.png'
import github from '../../images/github-logo.png'

export default function About() {
  const clickGitHub = () => {

  }

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
          <a href="https://www.linkedin.com/in/mabianepolniak/" target="_blank">
            <img alt="logo linkedin" src={linkedin}/>
          </a>
          <a href="https://github.com/mabiiak/" target="_blank">
            <img alt="logo linkedin" src={github}/>
          </a>
        </div>
      </AboutStyled>
      <div>
        <h2>Sobre</h2>
        <p>
            Meu nome é Mabiane, moro em Curitiba.
            Já trabalhei com atendimento ao cliente e vendas, e com isso descobri que eu gosto de ajudar outras pessoas. <br/><br/>

            Atualmente sou Desenvolvedora Fron-End e estudo Desenvolvimento Web na Trybe.
          </p>
      </div>
    </div>
  )
}
