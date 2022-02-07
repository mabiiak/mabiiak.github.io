import React from 'react';
import { FormStyles } from '../Styled'

export default function FormContact() {
  return (
    <FormStyles>
      <h1>Contato</h1>
      <form>
        <input placeholder="Insira seu nome" />
        <input placeholder="Insira seu email" />
        <textarea />
        <button>Enviar</button>
      </form>
    </FormStyles>
  )
}
