import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import './App.css';
import Login from './pages/login/Login';
import Sobre from './pages/sobre/Sobre';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login  />} />

        <Route path="/sobre" element={<Sobre  />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario />} />

      </Routes>
      <Footer />
    </Router>
);
}

export default App;