import { createRoot } from 'react-dom/client';
import Root from './routes/root';
import Movies from './components/movies';
import moviesLoader from './components/movies/loader';
import MovieDetails, { loader as MovieDetailLoader } from './components/movies/details';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";

import "./index.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="/home" element={<div className='p-3'>Welcome to MFE Host App</div> } />
      <Route path="/movies" element={<Movies />} loader={moviesLoader}>
        <Route path=":id" element={<MovieDetails />} loader={MovieDetailLoader} />
      </Route>
    </Route>
  )
);

const App = () => (
  <div className="mt-10 mx-auto max-w-6xl">
    <RouterProvider router={router} />
  </div>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
