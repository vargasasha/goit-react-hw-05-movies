import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (query === "") return;

    async function getMovies() {
      try {
        async function fetch() {
          axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
          const endPoint = 'search/movie';

          const options = {
            params: {
              api_key: '5186e2fae974004c70b9283e5f607f3e',
              language: 'en-US',
              query: query,
            },
          };

          const response = await axios.get(
            `${axios.defaults.baseURL}${endPoint}`,
            options
          );

          return response.data.results;
        }

        setMovies(await fetch());
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getMovies();
  }, [query]);

  return (
    <main>
      <h2>КІНОШКИ</h2>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          setQuery(evt.target.elements.query.value);
          evt.target.reset();
        }}
      >
        <input type="text" autoComplete="off" autoFocus name="query"></input>
        <button>Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>{' '}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Movies;
