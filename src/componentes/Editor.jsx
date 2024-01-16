import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { nuevaPeli, leerPelicula, actualizarPelicula } from '../redux/actions/actionsTypes';
import { useNavigate } from 'react-router-dom';
import { Button, TextField  } from '@mui/material';
import './Editor.css';

function Editor(props) {
  const navigate = useNavigate();
  let { id } = useParams();
  const initialValues = {
    nuevoTitulo: '',
    nuevoAnyoEstreno: '',
    mensaje: '',
    director: '',
  };

  const [formValues, setFormValues] = useState(initialValues);  

  const esNueva = () => {
    return (id == undefined);
  }

  useEffect(()=>{
    console.log("ID de la película:", id);

    // si la pelicula del editor no es nueva, tenemos que cargarla desde redux
    if (!esNueva()) {
      props.leerPeli(id);

      const datosPeli = props.datos.editable;
      setFormValues({
        nuevoTitulo: datosPeli.titulo,
        nuevoAnyoEstreno: datosPeli.anyoEstreno,
        mensaje: datosPeli.mensaje,
        director: datosPeli.director,      
      })  
    } else {
      setFormValues(initialValues);
    }

  }, []);

  
  //console.log(props.datos);

  const handleSubmit = (e) => {
    e.preventDefault();

    const datosPelicula = {
      titulo: formValues.nuevoTitulo,
      anyoEstreno: parseInt(formValues.nuevoAnyoEstreno),
      mensaje: formValues.mensaje,
      director: formValues.director,
    };

    if (esNueva()) {
      // creamos una pelicula nueva
      props.nuevaPelicula(datosPelicula);
    } else {
      // actualizamos la pelicula
      props.actualizarPeli(id, datosPelicula);
    }

    navigate('/peliculas'); // Redirección a la página de películas
  };  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({...formValues,[name]: value,});
  };  

  return (
    <form onSubmit={handleSubmit}>
      <div className = 'container-textField'>
        <div className='custom-textField'>
          <TextField 
            id="nuevoTitulo" 
            name="nuevoTitulo"
            label="Título" 
            variant="outlined" 
            type="text"
            value={formValues.nuevoTitulo} // Establecer el valor del TextField
            onChange={handleInputChange}
            required
          />
        </div>
        <div className='custom-textField'>
          <TextField 
            id="nuevoAnyoEstreno" 
            label="Año de Estreno" 
            variant="outlined"
            type="number"
            name="nuevoAnyoEstreno"
            value={formValues.nuevoAnyoEstreno}
            onChange={handleInputChange}
            required
            pattern="[0-9]*"
          />
        </div>
        <div className='custom-textField'>
          <TextField 
            id="mensaje" 
            label="Sinopsis"
            variant="outlined"
            name="mensaje" // Propiedad name
            multiline // Para permitir varias líneas
            rows={7} // Número de filas
            placeholder="Escriba la sinopsis aquí..."
            value={formValues.mensaje}
            onChange={handleInputChange}
          />
        </div>
        <div className='custom-textField'>
          <TextField 
            id="outlined-basic" 
            label="Director" 
            variant="outlined" 
            type="text"
            id="director"
            name="director"
            value={formValues.director}
            onChange={handleInputChange}
          />
        </div>
        <Button 
          className = 'custom-button'
          color='primary' 
          variant='outlined' 
          type="submit" >Añadir Película
        </Button>
      </div>
    </form>
  );
}

function mapStateToProps(estado, props) {
  return {
    datos: estado,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    nuevaPelicula: (peli) => dispatch(nuevaPeli(peli)),
    leerPeli: (id) => dispatch(leerPelicula(id)),
    actualizarPeli: (id, pelicula) => dispatch(actualizarPelicula(id, pelicula)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
