import { listMovies, createMovie, writeMovie } from '../../api';

// actionsTypes.js
export const LIST_MOVIE = 'LIST_MOVIE';
export const PELICULA_CREATE = 'PELICULA_CREATE';
export const PELICULA_DELETE = 'PELICULA_DELETE';
export const READ_PELICULA = 'READ_PELICULA';
export const UPDATE_PELICULA = 'UPDATE_PELICULA';


export function listaTodasLasPeliculas() {

  listMovies();

  return {
    type: LIST_MOVIE    
  };
}

export function nuevaPeli(data) {
  createMovie(data);

  return {
    type: PELICULA_CREATE,
    data,
  };
}

export function borrarPeli(id) {
  return {
    type: PELICULA_DELETE,
    id,
  };
}

export function leerPelicula(id) {
  return {
    type: READ_PELICULA,
    id,
  };
}

export function actualizarPelicula(id, pelicula) {
  return {
    type: UPDATE_PELICULA,
    payload: { id, pelicula },
  };
}
