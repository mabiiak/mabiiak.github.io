import React from 'react';
import { Project, CardProject, Botao }  from './Styled';

export default function Projects() {
  return (
    <Project>
      <h2>Projetos</h2>
      <div>
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
      </div>
      </Project>
  )
}
