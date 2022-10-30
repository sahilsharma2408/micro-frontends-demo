import { NavLink } from 'react-router-dom';

export default function AppNavLink( {href, children} ) {
    return (
        <NavLink
            to={href} 
            className={({ isActive }) => isActive ? 'font-medium underline' : undefined
        }
        >
            {children}
        </NavLink>
    )
}
