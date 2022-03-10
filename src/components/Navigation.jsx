import Card from './shared/Card';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <Card>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    'nav-link ' + (isActive ? 'active' : '')
                }
            >
                Home
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) =>
                    'nav-link ' + (isActive ? 'active' : '')
                }
            >
                About
            </NavLink>
        </Card>
    );
}

export default Navigation;
