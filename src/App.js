import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Peliculas from './componentes/Peliculas';
import Editor from './componentes/Editor';
import NoEncontrada from './componentes/NoEncontrada'
import { Container, Table, TableRow, TableBody, TableContainer } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <div className="container-header">
            <div id="logo">
              <Link to="/">
                <img src="/img/logo.png" alt="logo" />
              </Link>
            </div>
            <nav id="menu">
              <ul>
                <li>
                  <Link to="/peliculas">Películas</Link>
                  <Link to="/editor">Añadir Nueva</Link>
                </li>
              </ul>     
            </nav>
          </div>
        </header>

        <main className='App-main'>
          <Routes>
            <Route path="/" element={<Peliculas />} />
            <Route path="/peliculas" element={<Peliculas />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/editar/:id" element={<Editor />} />
            
            <Route path="*" element={<NoEncontrada />} />
          </Routes>
        </main>
      </Container>
    </div>
  );
}

export default App;
