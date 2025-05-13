import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import RegisterMemory from './pages/RegisterMemory';
import Memorias from './pages/Memorias';
import './App.css';

function App() {
    const [memorias, setMemorias] = useState([]);

    const adicionarMemoria = (novaMemoria) => {
        setMemorias([...memorias, novaMemoria]);
    };

    return (
        <Router>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registrar" element={<RegisterMemory adicionarMemoria={adicionarMemoria} />} />
                    <Route path="/memorias" element={<Memorias memorias={memorias} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;