import { useLoaderData } from 'react-router-dom';

export default function MovieDetails() {
    const movieDetails = useLoaderData();

    return (
        <div>
           <p className="text-3xl">{movieDetails.title}</p>
           <p className="mt-2">Year: {movieDetails.year}</p>
           <p className="mt-2">{movieDetails.description}</p>
        </div>
    )
}

export async function loader({params}) {
    const id = params.id;
    const res = await fetch(`http://localhost:3005/movies/${id}`);

    return res.json();
}