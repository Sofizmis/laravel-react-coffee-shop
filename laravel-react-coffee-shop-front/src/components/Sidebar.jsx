import { Link, useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProviders";

export default function Sidebar() {
    const { setUser, setToken } = useStateContext();
    const location = useLocation();

    const onLogout = (ev) => {
        ev.preventDefault()
        setUser({})
        setToken(null)
    }

    return (
        <aside className="premium-sidebar">
            <div className="brand-logo">
                ☕ CoffeLove
            </div>
            <nav>
                <Link to="/user/info" className={`nav-link ${location.pathname.startsWith('/user') ? 'active' : ''}`}>Профиль</Link>
                <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Главная</Link>
                <a href="#" onClick={onLogout} className="nav-link">Выйти</a>
            </nav>
        </aside>
    )
}
