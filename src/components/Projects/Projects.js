import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Project, CardProject, Botao }  from '../Styled';

export default function Projects() {
  return (
    <div>
      <h2>Projetos</h2>
     
      <Project>
      <CardProject>
        <Botao>vw</Botao>
        <Botao>rp</Botao>
        <div>
          <h3> Star Wars: Search Planets </h3>
          <p>Javascript/React</p>
        </div>
      </CardProject>

      <CardProject>
        <Botao>vw</Botao>
        <Botao>rp</Botao>
        <div>
          <h3> Trybetunes </h3>
          <p>Javascript/React</p>
        </div>
      </CardProject>
      <CardProject>
        <Botao>vw</Botao>
        <Botao>rp</Botao>
        <div>
          <h3> Trybetunes </h3>
          <p>Javascript/React</p>
        </div>
      </CardProject>
       
      </Project>
    </div>
  )
}
