import React from 'react';
import { HeaderStyled } from '../Styled';

export default function Header() {
  return (
    <HeaderStyled>
      <p className='name'>Mabiane Polniak</p>
      <div>
        <p> Sobre </p>
        <p> Projetos </p>
        <p> Contato </p>
      </div>

    </HeaderStyled>
  );
}
