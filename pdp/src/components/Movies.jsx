import { Outlet } from 'react-router-dom';
import { useLoaderData, useParams } from 'react-router-dom';
import AppNavLink from 'host/AppNavLink';

export default function Movies(props) {
    const movies = useLoaderData();
    const { id } = useParams();

    return (
        <div className="flex">
            <ul className="pr-10 text-sm flex-none">
                {
                    movies.map((movie) => (
                        <li key={movie.id} className="p-2">
                            <AppNavLink href={`/movies/${movie.id}`} >
                                {movie.title}
                            </AppNavLink>
                        </li>
                    ))
                }
            </ul>

            <div className="p-4">
                {!id && <p className="text-3xl">Please select a movie in PDP APP</p>}
                <Outlet />
            </div>
        </div>
    )
}
