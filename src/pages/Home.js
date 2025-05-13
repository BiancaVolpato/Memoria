import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>🧠 Guarde Suas Memórias!</h1>
            <p className="home-description">
                Bem-vindo ao seu diário digital. Aqui você pode registrar momentos especiais,
                pensamentos importantes ou qualquer memória que queira guardar. Tudo em um só lugar, com um toque moderno e simples.
            </p>
            <button className="home-button" onClick={() => navigate('/registrar')}>
                Criar memória
            </button>
        </div>
    );
    }