import React from 'react';
import icone from '../../images/icone.png'
import { AboutStyled } from '../Styled'

export default function About() {
  return (
    <AboutStyled>
      <img
        alt="Mabiane"
        src={ icone }
      />
      <div>
        <h1>Sobre mim:</h1>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing."</p>
      </div>
      
    </AboutStyled>
  )
}
