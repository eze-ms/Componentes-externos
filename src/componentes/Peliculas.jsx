import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Peli from './Peli';
import { listaTodasLasPeliculas, borrarPeli } from '../redux/actions/actionsTypes';
import './Peliculas.css';
import Editor from './Editor';
import { useNavigate } from 'react-router-dom';


function Peliculas(props) {

  const navigate = useNavigate();

  const handleEditarClick = (id) => {
    navigate(`/editar/${id}`); // Redirección a la página de edición
  };

  useEffect(()=>{

    props.obternerPelis();

  }, []);

  return (
    <div className="custom-lista-peliculas">
      <h2>Lista de Películas</h2>
      <ul>
        <li >
          {props.datos.peliculas.map((pelicula) => (
            <Peli
              key={pelicula.id}
              pelicula={pelicula}
              eliminar={()=>{props.borrarPelicula(pelicula.id)}}
              onEditarClick={() => handleEditarClick(pelicula.id)} // Llamar a la función de redirección
            />
          ))}
        </li>
     </ul>
     
      <h2>Agregar Nueva Película</h2>
      <Editor />
    </div>
  );
}

function mapStateToProps(estado, props) {
  return {
    datos: estado,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    obternerPelis: () => dispatch(listaTodasLasPeliculas()),
    borrarPelicula: (id) => dispatch(borrarPeli(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Peliculas);
