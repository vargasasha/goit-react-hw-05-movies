import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function getMovie() {
      try {
        async function fetch() {
          axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
          const endPoint = '/movie/';

          const options = {
            params: {
              api_key: '5186e2fae974004c70b9283e5f607f3e',
              language: 'en-US',
            },
          };

          const response = await axios.get(
            `${axios.defaults.baseURL}${endPoint}${movieId}`,
            options
          );
          console.log(response.data);
          return response.data;
        }

        setMovie(await fetch());
      } catch (error) {
        console.log(error);
      } finally {
      }
    }
    getMovie();
  }, [movieId]);

  return (
    <>
      <div>Детальки: {movieId}</div>
      <button>Go back</button>
      <div></div>
      <p>Additional information</p>
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
      <p>{movie.vote_average}</p>
      {/* <p>{movie.genres[0].name}</p> */}

      <ul>
        <li>
          <Link to="cast">КАСТ</Link>
        </li>
        <li>
          <Link to="reviews">РЕВЮ</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
