import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Project }  from '../Styled';

import pato from '../../images/pato.jpeg';
import starWars from '../../images/starwarsPlanets.png';
import wallet from '../../images/trybewalet.png';
import trybetunes from '../../images/trybetunes.png';

export default function Projects() {
  return (
    <Project>
      <h1>Projetos</h1>
      <Carousel className='car'>
        <div>
          <img src={starWars} alt="starWars" width="600px"/>
          <div className="legenda">
            <h3>Star Wars planets Search</h3>
            <p>
              Projeto feito durante o curso de desenvolvimento Web na Trybe. Utilizando React Hooks e css. <br/><br/> Ele tinha como objetivo criar uma aplicação que pegue os dados de uma requisição API e filtre os planetas do universo Star Wars de acordo com a busca, podendo criar mais de um filtro ao mesmo tempo. <br/><br/>
              <a href=" https://github.com/mabiiak/starwars-planets">Link do repositório</a><br/>
              <a href="https://mabiiak.github.io/starwars-planets/">Link do projeto</a>
            </p>
          </div>
        </div>
        <div className="legenda">
          <img src={wallet} alt="wallet"/>
          <h3>Trybewallet</h3>
          <p>
            Projeto feito durante o curso de desenvolvimento Web na Trybe, no módulo de Front-End. Utilizando heact Redux e css.<br/><br/> Ele tinha como objetivo criar uma aplicação que seja capaz de armazenar e somar as despesas do usuario, levando em conta a moeda, a cotação da moeda no dia da compra.<br/><br/>. 
            <a href="https://github.com/mabiiak/trybewallet">Link do repositório</a><br/>
            <a href="https://mabiiak.github.io/trybewallet/">Link do projeto</a></p>
        </div>
        <div className="legenda">
          <h3>Trybetunes</h3>
          <img src={trybetunes} alt="trybetunes"/>
          <p>
            Projeto feito durante o curso de desenvolvimento Web na Trybe, no módulo de Front-End. Utilizando heact Redux e css.<br/><br/> Ele tinha como objetivo criar uma aplicação que busque musicas por artistas/banda e seja capaz de armazenar as favoritas do usuario.<br/><br/>
            <a href="https://github.com/mabiiak/trybetunes">Link do repositório</a><br/>
            <a href="https://mabiiak.github.io/trybetunes/">Link do projeto</a>
            <br/><br/>
          </p>
        </div>
      </Carousel>
    </Project>
  )
}
