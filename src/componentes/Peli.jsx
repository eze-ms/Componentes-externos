import React from 'react';
import { Button } from '@mui/material';
import './Peli.css';

class Peli extends React.Component {

  render() {
    const { pelicula } = this.props;

    return (
        <li className='custom-nombre-peli'>
          {pelicula.titulo} ({pelicula.anyoEstreno})
          <div>
            <Button 
              className= 'custom-button-peli'
              color='primary' 
              variant='outlined'
              onClick={this.props.eliminar}>Eliminar
            </Button>
            <Button 
              className= 'custom-button-peli'
              color='primary' 
              variant='outlined' 
              onClick={this.props.onEditarClick}>Editar
            </Button> 
          </div>
        </li>
            
      
    );
  }
}

export default Peli;
