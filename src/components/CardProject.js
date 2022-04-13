import React from 'react';
import { Card, Botao }  from './Styled';
import projects from '../services/projects'; 

export default function CardProject() {
  return(
    <div>
      {
        projects.map((project) => {
          return (
            <Card>
              <Botao>{ project.links.view }</Botao>
              <Botao>{ project.links.repo }</Botao>
              <div>
                <h3>{ project.name }</h3>
                <p>{ project.language }</p>
              </div>
            </Card>
          )
        })
      }
      {console.log('obj', {projects})}
    </div>
  );
} 
