import React from 'react';
import { Card, Link, Image }  from './Styled';
import projects from '../services/projects'; 

export default function CardProject() {
  return(
    <div>
      {
        projects.map((project) => {
          console.log(project.img);
          return (
            <Card>
              <Image
                src={ project.img }
                alt={`Tela do projeto ${project.name}`}
              />
                <div>
                  <h3>{ project.name }</h3>
                  <p>{ project.language }</p>
                </div>
                <span>
                  <Link href={ project.links.view }>Ver</Link>
                  <Link href={ project.links.repo }> GitHub</Link>
                </span>
            </Card>
          )
        })
      }
    </div>
  );
} 
