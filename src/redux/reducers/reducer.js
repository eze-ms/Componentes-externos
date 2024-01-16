import { LIST_MOVIE, PELICULA_CREATE, PELICULA_DELETE, READ_PELICULA, UPDATE_PELICULA } from '../actions/actionsTypes';
import { listMovies, readMovie, writeMovie, createMovie, deleteMovie } from '../../api';

let datosIniciales = {
  siguiente_id: 4,
  peliculas: [
    { id: 1, titulo: 'Pelicula 1', anyoEstreno: 2020, mensaje: '', director: '' },
    { id: 2, titulo: 'Pelicula 2', anyoEstreno: 2019, mensaje: '', director: '' },
    { id: 3, titulo: 'Pelicula 3', anyoEstreno: 2021, mensaje: '', director: '' },
  ],
  editable: {
    id: -1,
    titulo: '',
    anyoEstreno: 0,
    mensaje: '',
    director: '',
  }
};

let reducer = (estado = datosIniciales, accion) => {
  switch (accion.type) {
    case LIST_MOVIE: {
      /*
      let listaPeli = accion.data;
      listaPeli.id = estado.siguiente_id;
      estado.peliculas.push(listaPeli);
      estado.siguiente_id++;
      */

      const nuevo_estado = { ...estado };
      return nuevo_estado;
    }



    case PELICULA_CREATE: {
      let nuevaPeli = accion.data;
      nuevaPeli.id = estado.siguiente_id;
      estado.peliculas.push(nuevaPeli);
      estado.siguiente_id++;

      const nuevo_estado = { ...estado };
        return nuevo_estado;
    }

    case PELICULA_DELETE: {
      let id = accion.id;
      estado.peliculas = estado.peliculas.filter((item) => {
        return item.id !== id;
      });

      const nuevo_estado = { ...estado };
        return nuevo_estado;
    }

    case READ_PELICULA: {
      
      const id = parseInt(accion.id);
      const peliculaEncontrada = estado.peliculas.find((pelicula) => pelicula.id === id);
      
// ** Si no se encuentra la película, se devuelve el estado sin cambios ** //
      if (!peliculaEncontrada) {
        return estado;
      }
      estado.editable = peliculaEncontrada;
//**/ Devuelve el estado con la película encontrada **//
      const nuevo_estado = { ...estado };
        return nuevo_estado;
    }
    case UPDATE_PELICULA: {
      const { id, pelicula } = accion.payload;

//** Busca la película a actualizar en la lista de películas **//
      const peliculaActualizada = estado.peliculas.find((p) => p.id == id); //porque es uno es string y el otro un número
    
      if (!peliculaActualizada) {
//** Si la película no se encuentra, devuelve el estado sin cambios **//
        return estado;
      }

      peliculaActualizada.titulo = pelicula.titulo;
      peliculaActualizada.anyoEstreno = pelicula.anyoEstreno;
      peliculaActualizada.mensaje = pelicula.mensaje;
      peliculaActualizada.director = pelicula.director;
    
// Devuelve un nuevo estado con la lista de películas actualizada //
      const nuevo_estado = { ...estado };
      return nuevo_estado;
    }
    default:
      return estado;
  }
};
export default reducer;
