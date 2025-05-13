import '../App.css';

export default function Memorias({ memorias }) {
    return (
        <div>
            <h2>🗃️ Suas Memórias Registradas</h2>
            {memorias.length === 0 ? (
                <p>Nenhuma memória foi registrada ainda.</p>
            ) : (
                <ul style={{ padding: 0 }}>
                    {memorias.map((mem, index) => (
                        <li key={index} className="memoria-card">
                            <h3>{mem.titulo}</h3>
                            <p>{mem.descricao}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}