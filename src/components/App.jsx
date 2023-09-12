import { Routes, Route, NavLink } from 'react-router-dom';

// import SharedLayout from './SharedLayout/SharedLayout';
import Home from 'pages/Home';

export const App = () => {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        {/* <Route path="/" element={<div>Домашня</div>} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<div>Киношки</div>} />
        <Route path="/movies/:movieId" element={<div>MovieDetails</div>} />

        <Route path="/movies/:movieId" element={<div>MovieDetails</div>}>
          <Route path="cast" element={<div>Cast</div>} />
          <Route path="reviews" element={<div>Reviews</div>} />
        </Route>
        <Route path="*" element={<div>Сторінку не знайдено</div>} />
      </Routes>
    </>
  );
};
