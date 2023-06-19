// Importar la biblioteca 'axios' para realizar solicitudes HTTP
const axios = require('axios');

// Clave de API de TMDb
const apiKey = '151789e15fdaffa657de9fc429607639';

// Función para buscar películas por título
async function buscarPeliculas(titulo) {
  try {
    // Realizar una solicitud GET a la API de TMDb
    const respuesta = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: apiKey,
        query: titulo
      }
    });

    // Obtener los resultados de la búsqueda de películas
    const resultados = respuesta.data.results;

    // Mostrar los detalles de cada película encontrada
    resultados.forEach(pelicula => {
      console.log('Título:', pelicula.title);
      console.log('Fecha de lanzamiento:', pelicula.release_date);
      console.log('Sinopsis:', pelicula.overview);
      console.log('-------------------------');
    });

  } catch (error) {
    console.error('Error al buscar películas:', error.message);
  }
}

// Uso del buscador de películas
const tituloBusqueda = 'Avengers'; // Cambia esto al título de película que deseas buscar
buscarPeliculas(tituloBusqueda);

/*
Recuerda reemplazar 'TU_CLAVE_DE_API_AQUI' con tu clave de API de TMDb que
hayas obtenido después de registrarte en su sitio web.

Este ejemplo utiliza la biblioteca Axios para realizar una 
solicitud GET a la API de TMDb, pasando la clave de API y el título
de la película que deseas buscar. Luego, muestra los detalles de las 
películas encontradas, como el título, la fecha de lanzamiento y la sinopsis.*/
