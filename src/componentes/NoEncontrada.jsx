import React from 'react';
import './NoEncontrada.css';


function NoEncontrada() {
  return (
    <div className='custom-not-found'>
        <p>La página no existe.</p>
        <img src='/img/computer.png' alt="Imagen no encontrada" />
      </div>
  );
}

export default NoEncontrada;