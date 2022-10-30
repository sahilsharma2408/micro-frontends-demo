import NavLink from '../NavLink';

export default function Header() {
  return (
    <header className="  border-b p-4">
        <nav className="space-x-4">
            <NavLink href="/home">
              Home
            </NavLink>
            <NavLink href="/movies">
              Movies
            </NavLink>
        </nav>
    </header>
  )
}
