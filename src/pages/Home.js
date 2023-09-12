import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function getTrending() {
      try {
        async function fetch() {
          axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

          const options = {
            params: {
              api_key: '5186e2fae974004c70b9283e5f607f3e',
              language: 'en-US',
            },
          };

          const response = await axios.get(
            `${axios.defaults.baseURL}trending/movie/day`,
            options
          );

          return response.data.results;
        }

        const response = await fetch();

        setTrending(response);
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getTrending();
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        {trending.map(movie => (
          <li key={movie.id}>
  
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>{' '}
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Home;
