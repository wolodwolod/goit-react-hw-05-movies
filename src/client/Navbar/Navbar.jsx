import { NavLink } from "react-router-dom";

import s from "./navbar.module.scss";

const getActiveClass = ({ isActive }) => isActive ? s.linkActive : s.link;

const Navbar = () => {
    return (
        < nav className={s.navbar}>
            <div className="container">
                <ul className={s.row}>
                    <li>
                        <NavLink to="/" className={getActiveClass}>
                        Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies" className={getActiveClass}>
                            Movies
                        </NavLink>
                    </li>             
                </ul>

            </div>
        </nav>
    )

};

export default Navbar;