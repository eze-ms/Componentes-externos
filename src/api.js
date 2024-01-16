const apiUrl = 'http://localhost:8080/peliculas/api.php';

async function sendRequest(action, data = {}) {
  const requestData = { action, ...data };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    return { err: error.message };
  }
}

export async function listMovies() { //funcion list
  return sendRequest('list');
}

export async function readMovie(id) { //funcion red
  return sendRequest('read', { id });
}

export async function writeMovie(movieData) { //funcion write
  return sendRequest('write', { movie: movieData });
}

export async function createMovie(movieData) { //funcion create/update
  return sendRequest('create', { movie: {
      title: movieData.titulo,
      year: movieData.anyoEstreno,
      director: movieData.director,
      synopsis: movieData.mensaje
    } });
}

export async function deleteMovie(id) {
  return sendRequest('delete', { id });
}
