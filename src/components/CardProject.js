import React from 'react';
import { Card, Link, Image }  from './styles/Projects';

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
                  <Link href={ project.links.view } target="_blank" >Ver</Link>
                  <Link href={ project.links.repo } target="_blank"> GitHub</Link>
                </span>
            </Card>
          )
        })
      }
    </div>
  );
} 
