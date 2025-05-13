import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/registrar">Registrar</Link>
            <Link to="/memorias">Memórias</Link>
        </nav>
    );
}