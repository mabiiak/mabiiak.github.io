import React from 'react';
import { Card, Link }  from './Styled';
import projects from '../services/projects'; 

export default function CardProject() {
  return(
    <div>
      {
        projects.map((project) => {
          console.log(project.img);
          return (
            <Card>
              <img
                src={ project.img }
                alt={`Tela do projeto ${project.name}`}
              />
              <Link href={ project.links.view }>Ver</Link>
              <Link href={ project.links.repo }> Repositório</Link>
              <div>
                <h3>{ project.name }</h3>
                <p>{ project.language }</p>
              </div>
            </Card>
          )
        })
      }
    </div>
  );
} 
