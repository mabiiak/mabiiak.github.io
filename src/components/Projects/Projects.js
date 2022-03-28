import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pato from '../../images/pato.jpeg';
import { Project }  from '../Styled';

import starWars from '../../images/starwarsPlanets.png';

export default function Projects() {
  return (
    <Project>
      <h1>Projetos</h1>
      <Carousel className='car'>
        <div>
          <img src={starWars} alt="pato" width="600px"/>
          <div className="legenda">
            <h3>Star Wars planets Search</h3>
            <p>
              Projeto feito durante o curso de desenvolvimento Web na Trybe. Utilizando React Hooks e css. <br/><br/> Ele tinha como objetivo criar uma aplicação que pegue os dados de uma requisição API e filtre os planetas do universo Star Wars de acordo com a busca, podendo criar mais de um filtro ao mesmo tempo. <br/><br/>
              <a href=" https://github.com/mabiiak/starwars-planets">Link do repositório</a><br/>
              <a href="https://mabiiak.github.io/starwars-planets/">Link do projeto</a>
            </p>
          </div>
        </div>
        <div>
          <img src={pato} alt="pato"/>
          <p>Sobre2</p>
        </div>
        <div>
          <img src={pato} alt="pato"/>
          <p>Sobre3</p>
        </div>
      </Carousel>
    </Project>
  )
}
