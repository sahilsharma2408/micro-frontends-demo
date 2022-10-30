export default async function loader() {
    const res = await fetch('http://localhost:3005/movies');

    return res.json();
}