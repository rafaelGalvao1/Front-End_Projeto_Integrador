import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import Home from './pages/home/Home';
import './App.css';
import Login from './pages/login/Login';
import Sobre from './pages/sobre/Sobre';
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario';
import { Provider } from "react-redux";
import store from './store/store';
import CadastrarProduto from './components/produtos/cadastrarProduto/CadastrarProduto';
import ListarProduto from './components/produtos/listarProduto/ListarProduto';
import ListarCategoria from './components/categorias/ListarCategoria/ListarCategoria';
import CadastrarCategoria from './components/categorias/cadastrarCategoria/CadastrarCategoria';
import DeletarProduto from './components/produtos/deletarProduto/DeletarProduto';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';


function App() {
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<CadastroUsuario />} />
            <Route path="/produtos" element={<ListarProduto />} />
            <Route path="/categorias" element={<ListarCategoria />} />
            <Route path="/cadastrarProduto" element={<CadastrarProduto />} />
            <Route path="/cadastrarProduto/:id" element={<CadastrarProduto />} />
            <Route path="/cadastrarCategoria" element={<CadastrarCategoria />} />
            <Route path="/cadastrarCategoria/:id" element={<CadastrarCategoria />} />
            <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
      </Routes>
      <Footer />
    </Router>
    </Provider>
);
}

export default App;