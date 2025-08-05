import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    instituicao: 'Senac'
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Erro ao cadastrar usuário');
      }

      const usuario = await response.json();
      localStorage.setItem('usuario', JSON.stringify(usuario));
      onLogin(); // muda tela
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className="login-container">
      <h2>Cadastre-se</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome completo" value={form.nome} onChange={handleChange} required />
        <input name="email" type="email" placeholder="E-mail" value={form.email} onChange={handleChange} required />
        <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} required />
        <input name="instituicao" value={form.instituicao} readOnly />
        <button type="submit">Jogar</button>
      </form>
    </div>
  );
};

export default Login;
