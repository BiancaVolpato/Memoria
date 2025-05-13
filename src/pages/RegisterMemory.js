import { useState } from 'react';
import '../App.css';

export default function RegisterMemory({ adicionarMemoria }) {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (titulo && descricao) {
            const data = new Date().toLocaleDateString();
            adicionarMemoria({ titulo, descricao, data });
            setTitulo('');
            setDescricao('');
            alert('Memória registrada!');
        }
    };

    return (
        <div>
            <h2>Registrar Nova Memória</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label><br />
                    <input value={titulo} onChange={e => setTitulo(e.target.value)} required />
                </div>
                <div>
                    <label>Descrição:</label><br />
                    <textarea value={descricao} onChange={e => setDescricao(e.target.value)} required />
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    );
}