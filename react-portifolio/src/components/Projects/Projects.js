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
          <p
            className="legend"
            onClick={ () => console.log('pato')}
          >
            Projeto...
          </p>
          <p>Sobre</p>
        </div>
        <div>
          <img src={pato} alt="pato"/>
          <p className="legend">Legend 2</p>
          <p>Sobre2</p>
        </div>
        <div>
          <img src={pato} alt="pato"/>
          <p className="legend">Legend 3</p>
          <p>Sobre3</p>
        </div>
      </Carousel>
    </Project>
  )
}
