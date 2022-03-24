import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import pato from '../../images/pato.jpeg';
import { Project }  from '../Styled';

export default function Projects() {
  return (
    <Project>
      <h1>Projetos</h1>
      <Carousel className='car'>
        <div>
          <img src={pato} alt="pato" />
          <div className="legenda">
            <h3>Nome</h3>
            <p>Descrição</p>
            <p>Data</p>
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
