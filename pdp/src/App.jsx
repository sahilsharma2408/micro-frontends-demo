import { createRoot } from 'react-dom/client';
import Root from './routes/root';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import moviesLoader from 'host/MovieData';
import Movies from './components/Movies'

import "./index.scss";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
       <Route path="/home" element={<div className='p-3'>Welcome to MFE PDF App</div> } />
      <Route path="/movies" element={<Movies />} loader={moviesLoader}>
        {/* <Route path=":id" element={<MovieDetails />} loader={MovieDetailLoader} /> */}
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

